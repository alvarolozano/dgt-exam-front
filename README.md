# DGT exam front
Este 2023, he decidido (por fin) ponerme en serio con el carnet de conducir. Uno de los mejores métodos para estudiar son los tests online.

En la actualidad existen diversas webs para realizar tests, cada una con sus puntos fuertes y debilidades. Este proyecto, junto a https://github.com/alvarolozano/dgt-test-downloader pretende ser un frontend alternativo a las webs existentes, basado en ofrecer una buena experiencia de usuario.

## Ideas para implementar
- [ ] Scraping web: Se crea un proyecto auxiliar (https://github.com/alvarolozano/dgt-test-downloader)
- [ ] Persistencia de datos en cliente/nube
    - [ ] Guardar las respuestas marcadas por el usuario para poder retomar el test más tarde (otras webs no lo ofrecen)
    - [ ] Almacenar respuestas erróneas para reforzarlas
    - [ ] Soporte multidispositivo
- [ ] Varias modalidades para hacer realizar tests
    - [ ] Test "simulacro": Cronometrado, 30 minutos / 30 preguntas. Se corrige una vez finalizado
    - [ ] Modo repaso: Preguntas individuales, corregidas instantáneamente
- [ ] Página de perfil de usuario en el que ver el histórico de fallos (con una gráfica) y permitir la repetición de tests concretos

## Stack
- Next.js: Framework basado en React, nos ofrece:
    - SSR
    - Generación estática
    - Routing simplificado
- Dexie: Sistema base de datos en el lado del cliente utilizando indexedDB 