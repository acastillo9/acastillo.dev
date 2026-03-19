---
title: "Claude Code Skills a Escala: Lecciones del Equipo de Anthropic"
excerpt: "Anthropic usa cientos de Skills de Claude Code internamente. Esto es lo que aprendieron — 9 tipos de skills, qué los hace funcionar de verdad, y cómo construir los tuyos."
date: 2026-03-19
readTime: "9 min de lectura"
tags: ["Claude Code", "AI Agents", "Herramientas para Devs", "Anthropic", "Prompt Engineering"]
locale: es
---

# Claude Code Skills a Escala: Lecciones del Equipo de Anthropic

Si todavía no le has prestado atención a los Skills de Claude Code, Thariq Shihipar (equipo de Claude Code, Anthropic) acaba de hacer el llamado de atención imposible de ignorar. En un hilo detallado, compartió lo que aprendieron construyendo y usando **cientos de Skills internamente** — qué tipos existen, qué los hace funcionar, y dónde se equivoca la mayoría de los desarrolladores.

Esto no es teoría. Es experiencia en producción del equipo que construyó la herramienta.

Mi síntesis, con mi perspectiva como alguien que lleva un tiempo construyendo Skills.

---

## Primero: ¿Qué es un Skill?

Si crees que un Skill es solo un archivo markdown con un prompt, estás dejando el 80% del poder sobre la mesa.

Un Skill es una **carpeta**. Puede contener:
- Un `SKILL.md` — las instrucciones principales para Claude
- Scripts que Claude puede ejecutar directamente
- Documentación de referencia, plantillas, archivos de configuración
- Almacenes de datos persistentes (logs JSON, estado en caché)

El modelo lee lo que necesita, cuando lo necesita. No tienes que volcar todo desde el principio — Claude explorará la carpeta progresivamente a medida que avanza la tarea. Ese es el cambio mental clave.

---

## Los 9 Tipos de Skills (y Cuándo Usar Cada Uno)

El desglose de Thariq mapea todo el espacio de soluciones. La mayoría de los desarrolladores construyen uno o dos tipos y paran ahí. El panorama completo:

### 1. Referencia de Librerías y APIs
Enséñale a Claude cómo usar una librería específica correctamente, incluyendo los puntos peligrosos.

**Ejemplos:** `billing-lib`, `internal-platform-cli`, `frontend-design`

El skill `frontend-design` (277k+ instalaciones) es el caso de estudio aquí. Se construyó iterando con clientes reales para mejorar el gusto de diseño de Claude — alejándolo de sus defaults (fuente Inter, gradientes morados, layouts genéricos). La lección: no expliques lo que hace la librería, explica lo que Claude haría mal sin tu skill.

### 2. Verificación de Producto
Deja que Claude pruebe tu producto de extremo a extremo usando Playwright, tmux o scripts personalizados.

**Ejemplos:** `signup-flow-driver`, `checkout-verifier`, `tmux-cli-driver`

Este tipo está subestimado. En vez de preguntar "¿funciona esto?", Claude puede navegar el flujo, observar el output y reportar. Combínalo con un skill de cambios de código y tienes un ciclo dev/verificación muy ajustado.

### 3. Recuperación y Análisis de Datos
Conecta Claude a tus sistemas de monitoreo, bases de datos o dashboards con credenciales y queries reales.

**Ejemplos:** `funnel-query`, `cohort-compare`, `grafana`

Pon la lógica de conexión y las plantillas de queries en el skill. Claude rellena las variables, ejecuta la query, interpreta los resultados. Esto convierte "¿cómo va el funnel esta semana?" en una sola línea.

### 4. Automatización de Procesos de Negocio y Equipo
Codifica flujos de trabajo repetitivos en un solo comando.

**Ejemplos:** `standup-post`, `create-ticket`, `weekly-recap`

Aquí es donde los Skills empiezan a sentirse como superpoderes. El conocimiento que antes vivía en docs de Notion o en la memoria tribal se vuelve ejecutable. Los procesos de tu equipo se vuelven componibles.

### 5. Scaffolding de Código y Plantillas
Genera boilerplate que sigue *tus* patrones, no los genéricos.

**Ejemplos:** `new-workflow`, `new-migration`, `create-app`

En vez de que Claude imagine cómo se ve tu patrón de migración, dale plantillas reales. Rellena los espacios, sigue tus convenciones, respeta tu estructura de carpetas.

### 6. Calidad de Código y Revisión
Aplica estándares, asiste en reviews, detecta patrones comunes que tu equipo aprendió a las malas.

**Ejemplos:** `adversarial-review`, `code-style`, `testing-practices`

El concepto de "adversarial-review" es interesante — le estás pidiendo a Claude que activamente busque huecos en el código, no que simplemente lo apruebe. Esta postura de prompt es fundamentalmente diferente, y funciona mejor cuando está en un skill que cuando se escribe ad hoc.

### 7. CI/CD y Despliegues
Maneja la mecánica de subir código y desplegar.

**Ejemplos:** `babysit-pr`, `deploy-service`, `cherry-pick-prod`

`babysit-pr` es mi nombre favorito de la lista. Captura exactamente lo que hace: monitorear un PR, responder a comentarios de revisión, relanzar tests inestables. Estos skills necesitan salvaguardas (más sobre eso abajo).

### 8. Runbooks de Operaciones
Síntoma → investigación → reporte estructurado.

**Ejemplos:** `service-debugging`, `oncall-runner`, `log-correlator`

Aquí los Skills genuinamente cambian cómo trabajan los equipos. En vez de que un humano siga un runbook paso a paso a las 2am, el skill hace la recolección de datos y la correlación. Tú sigues tomando las decisiones — pero Claude hace el trabajo de campo.

### 9. Operaciones de Infraestructura
Mantenimiento rutinario con rieles de seguridad incorporados.

**Ejemplos:** `resource-orphans`, `dependency-management`, `cost-investigation`

Crítico: estos necesitan guardas. Lo que nos lleva a...

---

## Lo Que Realmente Hace que los Skills Funcionen

### Elimina el ruido — sin piedad
Claude ya sabe mucho. El valor de tu skill está en el delta: ¿qué necesita saber Claude que *no sabe ya*? Enfócate ahí. El contexto largo que repite conocimiento común desperdicia tokens y diluye la señal.

### Construye una sección de "Gotchas"
Thariq la llamó el contenido de mayor señal en cualquier skill. Acumula fallos reales con el tiempo:
```markdown
## Gotchas
- `createPayment()` retorna `null` por fondos insuficientes, no un error. Verificar explícitamente.
- La DB de staging se reinicia a medianoche UTC. No ejecutar migraciones después de las 23:30.
- `deploy-service` falla silenciosamente si el nombre del servicio tiene mayúsculas.
```

Esta sección se paga sola la primera vez que previene un despliegue malo en producción.

### Usa el sistema de archivos para revelación progresiva
No metas todo en `SKILL.md`. Dile a Claude qué archivos existen y deja que los lea cuando los necesite:

```markdown
## Referencias
- `references/api.md` — referencia completa de la API con todos los endpoints
- `references/error-codes.md` — códigos de error conocidos y resoluciones
- `assets/migration-template.sql` — usar para nuevas migraciones
```

Claude tomará lo que necesita. Evitas el volcado de tokens y mantienes el skill enfocado.

### No sobre-constraigas a Claude
Los Skills son reutilizables. Si escribes instrucciones demasiado específicas para un caso de uso exacto, el skill se rompe en cuanto el contexto cambia. Dale a Claude el *qué* y los *gotchas* — deja el *cómo* flexible.

### Usa safety hooks bajo demanda
Dos hooks que vale la pena construir en cualquier skill destructivo:

- **`/careful`** — bloquea `rm -rf`, `DROP TABLE`, force-push, `kubectl delete`
- **`/freeze`** — restringe a Claude para solo editar archivos en un directorio específico

Se activan cuando se llaman y persisten durante la sesión. No hay excusa para no tenerlos en skills de ops y despliegues.

### Estado persistente entre sesiones
Usa logs append-only o archivos JSON para estado que necesita sobrevivir reinicios de sesión. Ejemplo:

```json
{
  "lastRun": "2026-03-18T09:00:00Z",
  "processedIds": ["abc123", "def456"],
  "errorCount": 2
}
```

Usa `${CLAUDE_PLUGIN_DATA}` para almacenamiento estable — sobrevive upgrades del skill.

---

## Distribución: Cómo Compartir Skills a Escala

**Equipo pequeño:** Haz commit en `./.claude/skills` de tu repositorio. Listo. Todos lo reciben al hacer pull.

**Equipo más grande:** Un marketplace interno (o incluso una página de Confluence con comandos de instalación) escala mejor. Los miembros optan por lo que realmente necesitan en vez de tener 50 skills cargados que nunca van a disparar.

**Open source:** Publica en ClawHub o npm. Mantén el campo `description` perfectamente afilado — eso es lo que usa el modelo para decidir *cuándo* disparar tu skill.

---

## Medición: Encuentra tus Skills Muertos

Usa un hook `PreToolUse` para registrar qué skills se activan y cuándo. Después de un mes, mira los datos:

- **Alto uso, alta satisfacción:** tus mejores skills. Documenta el patrón, construye más así.
- **Alto uso, correcciones frecuentes:** skills que no están del todo bien. Invierte en mejorarlos.
- **Bajo uso:** o la descripción está mal (Claude nunca lo dispara) o nadie lo necesita. Elimina o arregla.

Thariq compartió un [GitHub Gist](https://gist.github.com/ThariqS/24defad423d701746e23dc19aace4de5) con código de logging de ejemplo. Vale la pena leerlo.

---

## Composición de Skills

Puedes referenciar otros skills por nombre en tu `SKILL.md`. Si están instalados, Claude los llamará. Todavía no hay gestión de dependencias nativa — pero las convenciones de nombres funcionan bastante bien en la práctica:

```markdown
Este skill usa el skill `tmux` para la interacción con la terminal. Asegúrate de que esté instalado.
```

---

## Mi Perspectiva

Lo que más me llama la atención del desglose de Thariq es cuánto de esto mapea a *buena ingeniería de software* aplicada a un medio diferente. Revelación progresiva, separación de responsabilidades, instrumentación, componibilidad — no son ideas nuevas. Solo estamos aprendiendo a aplicarlas a los Skills.

La brecha entre un Skill que técnicamente funciona y uno que es realmente útil es la misma brecha que hay entre código que corre y código que es mantenible. La sección `Gotchas` es tu suite de tests. La estructura del sistema de archivos es tu arquitectura. El campo `description` es tu contrato de API.

Si estás construyendo Skills para un equipo ahora mismo, elige un tipo de la lista de Thariq que desbloquee gente de inmediato — probablemente el Tipo 4 (automatización de procesos) o el Tipo 1 (referencia de librería). Constrúyelo pequeño, instrumentalo, itera. No intentes construir los nueve tipos a la vez.

Los equipos que ganan con herramientas de IA no son los que tienen más Skills. Son los que tienen los Skills correctos, bien mantenidos, que la gente realmente usa.

---

## Recursos

- [Hilo original de Thariq Shihipar (@trq212)](https://x.com/trq212/status/2033949937936085378)
- [Documentación de Skills de Claude Code](https://docs.anthropic.com/claude-code/skills)
- [ClawHub — descubre y publica Skills](https://clawhub.com)
- [Gist de ejemplo de logging de uso](https://gist.github.com/ThariqS/24defad423d701746e23dc19aace4de5)
