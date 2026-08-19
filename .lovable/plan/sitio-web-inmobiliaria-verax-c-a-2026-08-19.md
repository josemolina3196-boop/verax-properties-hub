# Sitio web Inmobiliaria Verax C.A.

Sitio corporativo multipágina, responsivo, con la composición editorial de las imágenes de referencia (bloques negros de bordes redondeados, tipografía sans-serif condensada en mayúsculas, tarjetas con fichas técnicas, badges tipo pastilla) pero con la paleta corporativa Verax: azul rey institucional, rojo de conversión, amarillo promocional, blanco y gris antracita.

## Estructura de páginas

| Ruta | Contenido |
|---|---|
| `/` | Hero "Bienes raíces en el Táchira" con carrusel lateral de inmuebles destacados, franja de servicios, bloque de destacados del catálogo, cifras (19 años, 16.5K seguidores), CTA WhatsApp |
| `/propiedades` | Catálogo con filtros por operación (venta / alquiler), tipo (casa, apartamento, townhouse, PH, galpón, terreno) y zona. Tarjetas con badge de estado, m², habitaciones, baños, estacionamientos y precio |
| `/servicios` | Compra/venta, arrendamiento residencial y comercial, sector industrial y terrenos, administración integral para propietarios en el exterior, red de asesores (con CTA de reclutamiento) |
| `/zonas` | Cobertura por sector: Barrio Obrero, Pueblo Nuevo/La Castellana, Santa Cecilia/Colinas de Pirineos, Caneyes/La Ermita, Palo Gordo/Táriba/Cordero, con tipo de inmueble predominante y referencias |
| `/nosotros` | Trayectoria de 19 años, ficha corporativa, representación legal, posicionamiento en Barrio Obrero, diferenciadores |
| `/contacto` | Datos de sede, teléfono fijo 0276-3533561, WhatsApp +58 424-4259480, horario Lun–Vie 08:00–17:30, formulario de contacto (validación en cliente, envío al WhatsApp prellenado) y bloque de redes (@inmobiliaria_verax, @verax.venta, @veraxalquiler) |

## Diseño

- **Paleta (tokens en `src/styles.css`, oklch):** azul rey primario, rojo de conversión para badges "EN VENTA"/"BAJÓ DE PRECIO", amarillo/dorado para "PROMO DEL DÍA" y precios destacados, gris antracita y blanco puro de soporte. Modo claro como base.
- **Tipografía:** Montserrat (títulos en Black/Bold mayúsculas sostenidas) + Inter/Roboto para cuerpo, cargadas con `<link>` en la ruta raíz.
- **Composición tomada de las referencias:** encabezado de sección en panel negro con etiqueta a la derecha y línea divisoria inferior; grid de 4 tarjetas de residencias con caja de ficha técnica flotante y botón pastilla "Consultar precio"; banda destacada de color con tarjeta blanca de asesoría; bloque de ubicación en dos columnas (datos + mapa); franja negra de "Visitas privadas / Oficina de ventas"; footer de fondo oscuro con logotipo tipográfico grande y columnas de enlaces.
- **Header:** logo Verax + nav (Propiedades, Servicios, Zonas, Nosotros) + botón pastilla "CONTACTO"; menú hamburguesa a pantalla completa en móvil.
- **Responsividad:** grids que colapsan 4→2→1, filas mixtas con `grid-cols-[minmax(0,1fr)_auto]`, `min-w-0`/`truncate` en textos, todo verificado a 375px, 768px y 1440px.

## Contenido

- Datos de propiedades como arreglo estático en `src/data/properties.ts` (aprox. 12 inmuebles de ejemplo coherentes con las zonas y rangos reales: apartamentos en Pueblo Nuevo, casas en Santa Cecilia, galpones de 300–600 m² en Caneyes, locales en Barrio Obrero, terrenos en Palo Gordo).
- Imágenes: marcos placeholder neutros con proporción fija (sin fotos generadas), listos para reemplazar por fotografías reales. La marca de agua Verax se aplica como superposición en las tarjetas.
- Un logotipo Verax en SVG inline (casa geométrica lineal + "VERAX" en Black), sin generación de imágenes.

## Detalles técnicos

- TanStack Start con rutas en `src/routes/`; `src/routes/index.tsx` reemplaza el placeholder actual.
- Filtros de catálogo con estado local de React sobre el arreglo estático; sin backend ni base de datos en esta versión.
- Componentes reutilizables en `src/components/`: `SiteHeader`, `SiteFooter`, `SectionHeading`, `PropertyCard`, `PropertyFilters`, `ContactStrip`, `PlaceholderImage`.
- SEO por ruta: `head()` con title, description, og:title, og:description, og:url y canonical propios; JSON-LD `RealEstateAgent` con dirección y teléfono en la raíz; un solo H1 por página; textos en español.
- Sin secretos ni integraciones externas; enlaces de WhatsApp con `https://wa.me/...` y mensaje prellenado por propiedad.
