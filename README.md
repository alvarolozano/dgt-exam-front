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
- TailwindCSS framework

# Licencia

El código del proyecto es público, pero en un futuro pretendo lanzarlo como una solución comercial. Por lo que en caso de utilizarse, siempre deberá cumplirse la licencia estipulada. Así como tener en cuenta los siguentes puntos:

- La página web no está asociada a ninguna marca comercial ni empresa, por lo que para evitar la apropiación indebida de la aplicación, **NO SE PERMITE LA DISTRIBUCIÓN/DESPLIEGUE DE COPIAS MODIFICADAS**.
- Se permiten aportaciones al proyecto, por tanto la creación de Forks dentro de GitHub para realizar aportaciones está permitida (siempre y cuándo se mantenga la vinculación al proyecto original).
- Actualmente, la aplicación está desplegada y accesible públicamente. En caso de querer mostrarla o utilizarla para estudiar, recomiendo utilizarla.
- La información proveniente del proyecto https://github.com/alvarolozano/dgt-test-downloader proviene de otras webs de acceso público. No me hago responsable de posibles conflictos de licencias derivados del mal uso.


<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">DGT exam front</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://alvarolozano.dev" property="cc:attributionName" rel="cc:attributionURL">alvarolozano.dev</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/alvarolozano/dgt-exam-front" rel="dct:source">https://github.com/alvarolozano/dgt-exam-front</a>.