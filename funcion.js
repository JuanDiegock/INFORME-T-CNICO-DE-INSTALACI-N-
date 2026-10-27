    let contador =
    parseInt(
        localStorage.getItem(
            "contadorMantenimientoUPS"
        ),
        10
    );

    if(!contador){

        contador = 1;

        localStorage.setItem(
            "contadorMantenimientoUPS",
            contador
        );

    }

    actualizarCodigo();

    function actualizarCodigo(){

        document
        .getElementById("codigoInforme")
        .value =
        `ITMU-${String(contador).padStart(4,"0")}`;

    }

    document
    .getElementById("resetCounter")
    .addEventListener("click",()=>{

        contador = 1;

        localStorage.setItem(
            "contadorMantenimientoUPS",
            contador
        );

        actualizarCodigo();

    });

    document
    .getElementById("generarEquipos")
    .addEventListener("click",()=>{

        const cantidad =
        parseInt(
            document.getElementById(
                "cantidadEquipos"
            ).value
        );

        console.log("Cantidad:", cantidad);

        const contenedor =
        document.getElementById(
            "equiposContainer"
        );

        contenedor.innerHTML = "";

        for(let i=1;i<=cantidad;i++){

            console.log("Creando equipo", i);

            contenedor.innerHTML +=
            crearDatosGenerales(i);
        }

              // Generar los campos del registro fotográfico
        // después de crear todos los informes.
        setTimeout(() => {
        generarReporteFotografico();
        actualizarMaterialesTodos();
        }, 100);

        configurarClientes();
        configurarFechas();

    });
    function configurarClientes(){

        const equipos = document.querySelectorAll(".equipo-card");

        equipos.forEach(equipo=>{

            const cliente =
            equipo.querySelector(".cliente-select");

            const local =
            equipo.querySelector(".local-select");

            const ruc =
            equipo.querySelector(".ruc-input");

            cliente.addEventListener("change",()=>{
                switch(cliente.value){
                    case "cliente1":

        ruc.value = "20608300393";

        local.innerHTML = `
            <option value="">Seleccione un local</option>

            <option>Jockey Plaza - PVH</option>
            <option>Higuereta - PVH</option>
            <option>Brasil - PVH</option>
            <option>Cortijo - PVH</option>
            <option>Callao - PVH</option>
            <option>Ate - PVH</option>
            <option>Bolichera - PVH</option>
            <option>Risso - PVH</option>
            <option>Los Olivos - PVH</option>
            <option>Comas - PVH</option>
            <option>Trujillo - PVH</option>
            <option>Chiclayo - PVH</option>
            <option>Arequipa - PVH</option>
            <option>Ceres - PVH</option>
            <option>Pro - PVH</option>
            <option>Huancayo - PVH</option>
            <option>Izaguirre - PVH</option>
            <option>Alfonso Ugarte - PVH</option>
            <option>Universitaria - PVH</option>
            <option>Puente Piedra - PVH</option>
            <option>SJ Lurigancho - PVH</option>
            <option>Ica - PVH</option>
            <option>El Chacarero - PVH</option>
            <option>Santa Clara - PVH</option>
            <option>Colonial - PVH</option>
            <option>Centro Civico - PVH</option>
            <option>Chimbote - PVH</option>
            <option>Chosica - PVH</option>
            <option>Chincha - PVH</option>
            <option>Piura - PVH</option>
            <option>Huacho - PVH</option>
            <option>Nvo Chimbote - PVH</option>
            <option>Tacna - PVH</option>
            <option>Juliaca - PVH</option>
            <option>Guardia Civil - PVH</option>
            <option>LurIn - PVH</option>
            <option>Talara - PVH</option>
            <option>Puno - PVH</option>
            <option>San Borja - PVH</option>
            <option>Acho - PVH</option>
            <option>Huanuco - PVO</option>
            <option>Rimac Alcazar - PVH</option>
            <option>Huaral - PVH</option>
            <option>Sullana - PVH</option>
            <option>San Isidro - PVH</option>
            <option>Salaverry - PVH</option>
            <option>Paita - PVH</option>
            <option>Cusco Mall - PVH</option>
            <option>Barranca - PVH</option>
            <option>Cajamarca - PVH</option>
            <option>Brena - PVH</option>
            <option>Ventanilla - PVH</option>
            <option>Valle Hermoso - PVH</option>
            <option>La Molina - PVH</option>
            <option>Pucallpa - PVO</option>
            <option>Grifo Mexico - PVH</option>
            <option>Pisco - PVH</option>
            <option>Jaen - PVO</option>
            <option>Moquegua - PVH</option>
            <option>Talara Municipalidad - PVH</option>
            <option>El Agustino - PVH</option>
            <option>Armado de canastas</option>
            <option>La Curva - PVH</option>
            <option>Ves Placita - PVH</option>
            <option>Sucre - PVH</option>
            <option>Tarapoto - PVO</option>
            <option>Ilo - PVH</option>
            <option>Tumbes - PVH</option>
            <option>Puruchuco - PVH</option>
            <option>Chiclayo Aventura - PVH</option>
            <option>Miraflores - PVH</option>
            <option>Caminos del Inca - PVS</option>
            <option>Art Express - PVS</option>
            <option>El Ejercito - PVS</option>
            <option>Salamanca - PVS</option>
            <option>Ayacucho - PVS</option>
            <option>Corpac - PVS</option>
            <option>Dasso - PVS</option>
            <option>San Jorge - PVS</option>
            <option>Alameda Sur - PVS</option>
            <option>El Tambo Huancayo - PVS</option>
            <option>Villa el Salvador - PVS</option>
            <option>Multiplaza - PVS</option>
            <option>Trujillo Mansiche - PVS</option>
            <option>Chorrillos Iglesias - PVS</option>
            <option>Magdalena - PVS</option>
            <option>Cine Rimac - PVS</option>
            <option>Grifo Kio - PVS</option>
            <option>La Paz - PVS</option>
            <option>Villa Marina - PVS</option>
            <option>Proceres - PVS</option>
            <option>La Victoria - PVS</option>
            <option>La Perla - PVS</option>
            <option>Trujillo Valcarcel - PVS</option>
            <option>Chaclacayo - PVS</option>
            <option>Bolognesi - PVE</option>
            <option>Santa Cruz - PVE</option>
            <option>Supermercados SKA - PVE</option>
            <option>Centro Trujillo - PVE</option>
            <option>Jiron de la Union - PVE</option>
            <option>San Miguel - PVH</option>
            <option>Cusco Wanchaq - PVH</option>
            <option>Mercaderes - PVS</option>
            <option>Primavera - PVH</option>
            <option>Aventura SJL - PVH</option>
            <option>Pezet - VIV</option>
            <option>Benavides - VIV</option>
            <option>Dos de Mayo - VIV</option>
            <option>Monterrico - VIV</option>
            <option>Javier Prado - VIV</option>
            <option>Libertadores - VIV</option>
            <option>Asia - VIV</option>
            <option>Destinos del Sabor - VIV</option>
            <option>Pardo - VIV</option>
            <option>Alm. Santa Rosa</option>
            <option>Oficinas Morelli</option>
        `;

        break;

        case "cliente2":

        ruc.value = "20492092313";

        local.innerHTML = `
            <option value="">Seleccione un local</option>

            <option>Zarate 2 - MK</option>
            <option>Cusco - MK</option>
            <option>Piura 2 - MK</option>
            <option>Arequipa 2 - MK</option>
            <option>Sullana - MK</option>
            <option>Independencia - MK</option>
            <option>Callao - MK</option>
            <option>Santa Anita - MK</option>
            <option>Surco - MK</option>
            <option>Arequipa - MK</option>
            <option>Chiclayo - MK</option>
            <option>Zarate - MK</option>
            <option>Trujillo - MK</option>
            <option>Piura - MK</option>
            <option>Comas - MK</option>
            <option>Villa El Salvador - MK</option>
            <option>Huancayo - MK</option>
            <option>Chincha - MK</option>
            <option>Ica - MK</option>
            <option>Huacho - MK</option>
            <option>Trujillo 2 - MK</option>
            <option>Cercado - MK</option>
            <option>Chorrillos - MK</option>
            <option>Chimbote - MK</option>
            <option>Cañete - MK</option>
            <option>SMP - MK</option>
            <option>SJM - MK</option>
            <option>HO (Oficina Central) - MK</option>
            <option>Cusco - MK (Centro Comercial)</option>
        `;

        break;
        case "cliente3":

        ruc.value = "20607281921";

        local.innerHTML = `
            <option value="">Seleccione un local</option>

            <option>Punta Negra</option>
            <option>VES Aldea</option>
            <option>Arequipa</option>
            <option>Arequipa 2</option>
            <option>Callao LATAM</option>
            <option>Chiclayo</option>
            <option>Chiclayo 2</option>
            <option>Huachipa</option>
            <option>Huachipa Merkao</option>
            <option>Huancayo</option>
            <option>Piura Aldeas</option>
            <option>Punta Hermosa</option>
            <option>Trujillo Ventanilla</option>
            <option>Ventanilla</option>
        `;

        break;
        case "cliente4":

        ruc.value = "20493020618";

        local.innerHTML = `
            <option value="">Seleccione un local</option>

            <option>Arequipa - OE</option>
            <option>Cajamarca - OE</option>
            <option>Cusco - OE</option>
            <option>Huanuco - OE</option>
            <option>Juliaca - OE</option>
            <option>Lima Norte - OE</option>
            <option>Megaplaza - OE</option>
            <option>Miraflores - OE</option>
            <option>Pucallpa - OE</option>
            <option>Salaverry - OE</option>
            <option>San Borja - OE</option>
            <option>SJL - OE</option>
            <option>Barranca - OE</option>
            <option>Centro Civico - OE</option>
            <option>Huancayo - OE</option>
            <option>Jiron - OE</option>
            <option>Jockey - OE</option>
            <option>Mall del Sur - OE</option>
            <option>Piura - OE</option>
            <option>Primavera - OE</option>
            <option>Puruchuco - OE</option>
            <option>Sfera Puruchuco - OE</option>
            <option>Trujillo - OE</option>
        `;

        break;
        case "cliente5":

        ruc.value = "20605900012";

        local.innerHTML = `
            <option value="">
            </option>
        `;

        break;

        local.innerHTML = `
            <option value="">Seleccione un local</option>

            <option>Arequipa - OE</option>
            <option>Cajamarca - OE</option>
            <option>Cusco - OE</option>
            <option>Huanuco - OE</option>
            <option>Juliaca - OE</option>
            <option>Lima Norte - OE</option>
            <option>Megaplaza - OE</option>
            <option>Miraflores - OE</option>
            <option>Pucallpa - OE</option>
            <option>Salaverry - OE</option>
            <option>San Borja - OE</option>
            <option>SJL - OE</option>
            <option>Barranca - OE</option>
            <option>Centro Civico - OE</option>
            <option>Huancayo - OE</option>
            <option>Jiron - OE</option>
            <option>Jockey - OE</option>
            <option>Mall del Sur - OE</option>
            <option>Piura - OE</option>
            <option>Primavera - OE</option>
            <option>Puruchuco - OE</option>
            <option>Sfera Puruchuco - OE</option>
            <option>Trujillo - OE</option>
        `;

        break;


        default:

            ruc.value = "";

            local.innerHTML = `
                <option value="">
                    Seleccione un cliente primero
                </option>
            `;
    }
            });

        });

    }
    function configurarFechas(){

        document.querySelectorAll(".equipo-card").forEach(equipo => {

            const fechaInput =
                equipo.querySelector(".fecha-input");

            const fechaTexto =
                equipo.querySelector(".fecha-trabajos");

            function actualizarFechaTrabajos(){

                if(!fechaInput.value){
                    fechaTexto.textContent = "__________";
                    return;
                }

                const partes =
                    fechaInput.value.split("-");

                const año =
                    partes[0];

                const mes =
                    parseInt(partes[1]) - 1;

                const dia =
                    partes[2];

                const fecha =
                    new Date(año, mes, dia);

                const nombreMes =
                    fecha.toLocaleString("es-PE", {
                        month: "long"
                    });

                fechaTexto.textContent =
                    `${dia} de ${nombreMes} de ${año}`;
            }

            fechaInput.addEventListener(
                "change",
                actualizarFechaTrabajos
            );

            actualizarFechaTrabajos();

        });

    }

 // ==========================================
 // CÁLCULO AUTOMÁTICO DE MATERIALES
 // ==========================================

function actualizarMaterialesTodos() {
    const cantidadEquipos = Math.max(
        1,
        parseInt(
            document.getElementById("cantidadEquipos")?.value,
            10
        ) || 1
    );

    const tablas = [
        ...document.querySelectorAll(".tabla-materiales")
    ];

    if (tablas.length === 0) return;

    tablas.forEach((tabla, indiceTabla) => {
        tabla.querySelectorAll("tbody tr").forEach((fila, indiceFila) => {
            const estandar = fila.querySelector(".material-estandar");
            const utilizado = fila.querySelector(".material-utilizado");
            const excedente = fila.querySelector(".material-excedente");

            if (!estandar || !utilizado || !excedente) return;

            const unidad = fila.dataset.unidad || "unidades";
            const base = estandar.dataset.baseEstandar;

            if (
                base === "" ||
                base == null ||
                !Number.isFinite(Number(base))
            ) {
                excedente.value = "Pendiente";
                return;
            }

            const estandarTotal = Number(base) * cantidadEquipos;

            estandar.value = estandar.type === "number"
                ? String(estandarTotal)
                : unidad === "m"
                    ? `${estandarTotal.toFixed(2)} m`
                    : `${estandarTotal} unidades`;

            const texto = utilizado.value.trim();
            const totalUtilizado = Number(texto);

            const excedenteTotal =
                texto !== "" &&
                Number.isFinite(totalUtilizado) &&
                totalUtilizado >= 0
                    ? Math.max(0, totalUtilizado - estandarTotal)
                    : 0;

            excedente.value = unidad === "m"
                ? `${excedenteTotal.toFixed(2)} m`
                : `${excedenteTotal} unidades`;
        });
    });
}

// Compartir cantidades utilizadas entre los informes generados.
document.addEventListener("input", function(event) {
    const objetivo = event.target;

    if (
        !objetivo.matches(
            ".material-utilizado, .material-estandar"
        )
    ) {
        return;
    }

    const filaOrigen = objetivo.closest("tr");
    const tablaOrigen = objetivo.closest(".tabla-materiales");

    if (!filaOrigen || !tablaOrigen) return;

    const indiceFila = [
        ...filaOrigen.parentElement.children
    ].indexOf(filaOrigen);

    // Si se modifica el material utilizado, compartir ese total.
    if (objetivo.matches(".material-utilizado")) {
        document.querySelectorAll(".tabla-materiales").forEach(tabla => {
            const fila = tabla.querySelectorAll("tbody tr")[indiceFila];
            const input = fila?.querySelector(".material-utilizado");

            if (input && input !== objetivo) {
                input.value = objetivo.value;
            }
        });
    }

    // Guardar el estándar por UPS cuando se introduce manualmente.
    if (
        objetivo.matches(".material-estandar") &&
        objetivo.dataset.baseEstandar === ""
    ) {
        const valorBase = objetivo.value.trim();

        if (
            valorBase !== "" &&
            Number.isFinite(Number(valorBase)) &&
            Number(valorBase) >= 0
        ) {
            document.querySelectorAll(".tabla-materiales").forEach(tabla => {
                const fila = tabla.querySelectorAll("tbody tr")[indiceFila];
                const input = fila?.querySelector(".material-estandar");

                if (input) {
                    input.dataset.baseEstandar = valorBase;
                }
            });
        }
    }

    actualizarMaterialesTodos();
});

// Actualizar los estándares inmediatamente al generar los equipos.
document.getElementById("generarEquipos").addEventListener(
    "click",
    function() {
        requestAnimationFrame(() => {
            actualizarMaterialesTodos();
        });
    }
);

    function crearDatosGenerales(numero){

        return `

        <div class="equipo-card">

            <div class="equipo-header">
                INFORME DE INSTALACIÓN
            </div>

            <div class="seccion">

                <h2 class="seccion-titulo">
                I. DATOS DEL CLIENTE Y UBICACIÓN
                </h2>

                <div class="grid-datos">

                    <div class="campo">

                        <label>Cliente</label>

                        <select class="cliente-select">

                            <option value="">
                                Seleccione un cliente
                            </option>

                            <option value="cliente1">
                                COMPAÑÍA FOOD RETAIL
                            </option>

                            <option value="cliente2">
                                MAKRO SUPERMAYORISTA
                            </option>

                            <option value="cliente3">
                                OSLO
                            </option>

                            <option value="cliente4">
                                TIENDAS PERUANAS (OECHSLE)
                            </option>

                            <option value="cliente5">
                                FARMACIAS PERUANAS
                            </option>

                        </select>

                    </div>


                    <div class="campo">

                        <label>RUC</label>

                        <input
                            type="text"
                            class="ruc-input"
                            readonly>

                    </div>


                    <div class="campo">

                        <label>Ubicación</label>

                        <input
                            type="text"
                            class="ubicacion-input"
                            placeholder="Ingrese la ubicación">

                    </div>


                    <div class="campo">

                        <label>Local</label>

                        <select class="local-select">

                            <option value="">
                                Seleccione un cliente primero
                            </option>

                        </select>

                    </div>


                    <div class="campo">

                        <label>Equipos Energizados</label>

                        <select class="equipos-energizados-input">

                            <option value="">
                                Seleccione una opción
                            </option>

                            <option value="Servicio 1">
                                Caja de Transferencia
                            </option>

                            <option value="Servicio 2">
                                Sistemas
                            </option>

                            <option value="Servicio 3">
                                Servidores
                            </option>

                        </select>

                    </div>


                    <div class="campo">

                        <label>Servicio</label>

                        <input
                            type="text"
                            class="servicio-input"
                            value="Instalación de UPS + Caja de Transferencia">

                    </div>


                     <div class="campo">

                        <label>Fecha del Servicio</label>

                        <input
                            type="date"
                            class="fecha-input">

                    </div>

                    <div class="campo">

                        <label>Técnico Responsable</label>

                        <input
                            type="text"
                            class="tecnico-responsable-input"
                            placeholder="Ingrese el nombre del técnico">

                    </div>

                </div>





                <!-- =========================
                    II. EPPS Y EQUIPO
                ========================== -->

                <div class="inspeccion-box">

                    <h2 class="seccion-titulo">
                        II. DATOS TÉCNICOS DE LOS EQUIPOS
                    </h2>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_1">

        <label for="epp${numero}_1">
            Guantes de badana 
        </label>

    </div>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_2">

        <label for="epp${numero}_2">
            Casco
        </label>

    </div>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_3">

        <label for="epp${numero}_3">
            Barbiquejo
        </label>

    </div>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_4">

        <label for="epp${numero}_4">
            Botas de seguridad dielectricas
        </label>

    </div>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_5">

        <label for="epp${numero}_5">
            Lentes de seguridad
        </label>

    </div>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_6">

        <label for="epp${numero}_6">
            Careta de seguridad
        </label>

    </div>


    <div class="checklist-item">

        <input
            type="checkbox"
            id="epp${numero}_7">

        <label for="epp${numero}_7">
            Tapones auditivos tipo diadema
        </label>

    </div>

                    </div>


                    <!-- UPS ANTIGUO -->

                    <h3 style="margin-top:30px;color:#003f73;">
                        UPS ANTIGUO
                    </h3>

                    <table class="tabla-info">

                        <thead>

                            <tr>

                                <th colspan="2">
                                    DATOS TÉCNICOS DEL EQUIPO
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Equipo</td>

                                <td>
                                    <input type="text" value="UPS">
                                </td>

                            </tr>

                            <tr>

                                <td>Marca</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Modelo</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Serie</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Potencia</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                        </tbody>

                    </table>


                    <!-- UPS NUEVO -->

                    <h3 style="margin-top:30px;color:#003f73;">
                        UPS NUEVO
                    </h3>

                    <table class="tabla-info">

                        <thead>

                            <tr>

                                <th colspan="2">
                                    DATOS TÉCNICOS DEL EQUIPO
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Equipo</td>

                                <td>
                                    <input type="text" value="UPS">
                                </td>

                            </tr>

                            <tr>

                                <td>Marca</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Modelo</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Serie</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Potencia</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                        </tbody>

                    </table>


                    <!-- CAJA DE TRANSFERENCIA ANTIGUA -->

                    <h3 style="margin-top:30px;color:#003f73;">
                        CAJA DE TRANSFERENCIA ANTIGUA
                    </h3>

                    <table class="tabla-info">

                        <thead>

                            <tr>

                                <th colspan="2">
                                    DATOS TÉCNICOS DEL EQUIPO
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Equipo</td>

                                <td>
                                    <input
                                        type="text"
                                        value="CAJA DE TRANSFERENCIA">
                                </td>

                            </tr>

                            <tr>

                                <td>Marca</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Modelo</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Serie</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                        </tbody>

                    </table>


                    <!-- CAJA DE TRANSFERENCIA NUEVA -->

                    <h3 style="margin-top:30px;color:#003f73;">
                        CAJA DE TRANSFERENCIA NUEVA
                    </h3>

                    <table class="tabla-info">

                        <thead>

                            <tr>

                                <th colspan="2">
                                    DATOS TÉCNICOS DEL EQUIPO
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Equipo</td>

                                <td>
                                    <input
                                        type="text"
                                        value="CAJA DE TRANSFERENCIA">
                                </td>

                            </tr>

                            <tr>

                                <td>Marca</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Modelo</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                            <tr>

                                <td>Serie</td>

                                <td>
                                    <input type="text">
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>


                <!-- =========================
                    III. ALCANCE DEL SERVICIO
                ========================== -->

                <div class="inspeccion-box">

                    <h2 class="seccion-titulo">
                        III. ALCANCE DEL SERVICIO (TRABAJOS REALIZADOS)
                    </h2>

                    <ul class="alcance-lista">
                        <li>
                            <strong>Desmontaje:</strong>
                            Retiro seguro de UPS preexistente.
                        </li>
                        <li>
                            <strong>Montaje:</strong>
                            Instalación física y fijación de nuevo UPS SALICRU y caja de transferencia INFRASOL.
                        </li>
                        <li>
                            <strong>Conexionado Eléctrico:</strong>
                            Cableado de entrada, salida y bypass ejecutado con conductores de calibre File y terminales File.
                        </li>
                        <li>
                            <strong>Puesta a Tierra:</strong>
                            Integración directa al Sistema de Puesta a Tierra (SPAT) del cuarto de comunicaciones.
                        </li>
                        <li>
                            <strong>Configuración:</strong>
                            Programación de parámetros iniciales (Voltaje, Frecuencia y Corriente de carga de baterías).
                        </li>
                    </ul>

                </div>

<!-- =========================
    IV. PARÁMETROS ELÉCTRICOS Y MEDICIONES
========================== -->

<div class="mediciones-box">

    <h2 class="seccion-titulo">
        IV. PARÁMETROS ELÉCTRICOS Y MEDICIONES (CON CARGA CONECTADA)
    </h2>

    <p>
        <em>Sistema Eléctrico Referencial: 230 Voltios - 1Φ+N+T / 60Hz</em>
    </p>

 <table class="tabla-info tabla-parametros-resumen">

    <thead>
        <tr>
            <th>Parámetro Medido</th>
            <th>UPS (Medición Final)</th>
            <th>Caja de Transferencia</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td><strong>Tensión L-N (Entrada / Salida)</strong></td>
            <td><input type="text" value="220 V / 220 V"></td>
            <td><input type="text" value="220 V / 220 V"></td>
        </tr>
        <tr>
            <td><strong>Tensión L-T (Entrada / Salida)</strong></td>
            <td><input type="text" value="220 V / 220 V"></td>
            <td><input type="text" value="220 V / 220 V"></td>
        </tr>
        <tr>
            <td><strong>Tensión N-T</strong></td>
            <td><input type="text" value="0.0 V"></td>
            <td><input type="text" value="0.0 V"></td>
        </tr>
        <tr>
            <td><strong>Corriente de Entrada (A)</strong></td>
            <td><input type="text" value="[Anotar valor real medido]"></td>
            <td><input type="text" value="[Anotar valor real medido]"></td>
        </tr>
        <tr>
            <td><strong>Corriente de Salida (A)</strong></td>
            <td><input type="text" value="[Anotar valor real medido]"></td>
            <td><input type="text" value="[Anotar valor real medido]"></td>
        </tr>
        <tr>
            <td><strong>% de Carga Conectada</strong></td>
            <td><input type="text" value="[Anotar valor real medido]"></td>
            <td><input type="text" value="N/A"></td>
        </tr>
        <tr>
            <td><strong>Frecuencia (Hz)</strong></td>
            <td><input type="text" value="60.0 Hz"></td>
            <td><input type="text" value="60.0 Hz"></td>
        </tr>
        <tr>
            <td><strong>Temperatura del Cuarto (°C)</strong></td>
            <td><input type="text" value="23.0 °C"></td>
            <td><input type="text" value="23.4 °C"></td>
        </tr>
    </tbody>

</table>

</div>

<!-- =========================
    V. REGISTRO DE MATERIALES Y CONSUMIBLES
========================== -->

<div class="mediciones-box">

    <h2 class="seccion-titulo">
        V. REGISTRO DE MATERIALES Y CONSUMIBLES (CONTROL DE EXCEDENTES)
    </h2>

    <p class="nota-materiales">
        <em>(Nota Explicativa: El alcance estándar de instalación contratado incluye hasta un máximo de 3.0 metros lineales de cableado por polo. Todo metraje o insumo adicional utilizado debido a la distancia real del recorrido en la tienda deberá registrarse en esta tabla para su correspondiente liquidación y facturación de adicionales).</em>
    </p>

    <table class="tabla-info tabla-materiales">

        <thead>
            <tr>
                <th>Material / Consumible</th>
                <th>Cantidad Estándar Incluida</th>
                <th>Cantidad Total Utilizada</th>
                <th>Excedente / Adicional a Facturar</th>
            </tr>
        </thead>
<tbody>
    <tr data-unidad="m">
        <td><strong>Cable de Fuerza [Tipo / Calibre AWG]</strong></td>
        <td><input type="text" class="material-estandar" data-base-estandar="3" value="3.0 m" readonly></td>
        <td><input type="number" class="material-utilizado" min="0" step="0.01" placeholder="Ingrese cantidad"></td>
        <td><input type="text" class="material-excedente" value="0.00 m" readonly></td>
    </tr>

    <tr data-unidad="m">
        <td><strong>Tubería conduit PVC / PVD / Canaleta</strong></td>
        <td><input type="text" class="material-estandar" data-base-estandar="3" value="3.0 m" readonly></td>
        <td><input type="number" class="material-utilizado" min="0" step="0.01" placeholder="Ingrese cantidad"></td>
        <td><input type="text" class="material-excedente" value="0.00 m" readonly></td>
    </tr>

    <tr data-unidad="unidades">
        <td><strong>Terminales de compresión [Tipo / Medida]</strong></td>
        <td><input type="number" class="material-estandar" data-base-estandar="13" value="13" min="0" step="1" readonly></td>
        <td><input type="number" class="material-utilizado" min="0" step="1" placeholder="Ingrese cantidad"></td>
        <td><input type="text" class="material-excedente" value="0 unidades" readonly></td>
    </tr>

    <tr data-unidad="m">
        <td><strong>Cable UTP</strong></td>
        <td><input type="text" class="material-estandar" data-base-estandar="3" value="3.0 m" readonly></td>
        <td><input type="number" class="material-utilizado" min="0" step="0.01" placeholder="Ingrese cantidad"></td>
        <td><input type="text" class="material-excedente" value="0.00 m" readonly></td>
    </tr>
</tbody>
    </table>

    <style>
        .mediciones-box .nota-materiales {
            margin: 12px 0 38px;
            color: #475569;
            font-size: 13px;
            line-height: 1.55;
            text-align: justify;
        }

        .mediciones-box .tabla-materiales {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 13px;
        }

        .mediciones-box .tabla-materiales th,
        .mediciones-box .tabla-materiales td {
            border: 1px solid #b8cde5;
            padding: 7px 8px;
            vertical-align: top;
            text-align: left;
            overflow-wrap: anywhere;
        }

        .mediciones-box .tabla-materiales thead th {
        background: #004777;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        padding: 9px 8px;
        }

        .mediciones-box .tabla-materiales tbody td:first-child {
            color: #34445e;
        }

        .mediciones-box .tabla-materiales input {
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
            padding: 2px;
            border: none;
            outline: none;
            background: transparent;
            color: #34445e;
            font: inherit;
        }
    </style>

</div>

<!-- =========================
     VI. PROTOCOLO DE PRUEBAS Y COMISIONAMIENTO
========================== -->

<div class="actividades-box">

    <h2 class="seccion-titulo">
        VI. PROTOCOLO DE PRUEBAS Y COMISIONAMIENTO (COMMISSIONING)
    </h2>

    <h3 style="margin:20px 0 12px 25px;color:#34445e;">
        A. Checklist de Pruebas en Vacío (Sin Carga Conectada)
    </h3>

    <table class="tabla-pruebas" style="width:100%;border-collapse:collapse;">
        <thead>
            <tr>
                <th>Ítem</th>
                <th>Descripción de la Prueba / Verificación</th>
                <th>C</th>
                <th>NC</th>
                <th>N/A</th>
                <th>Parámetro Esperado / Observaciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>V-01</td>
                <td>Verificación de rotación de fases e igualdad angular de tensión en entrada de red.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_v01" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v01" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v01" value="NA"></td>
                <td>Coincidencia de fases L-N / L-T en 220 V ±1%</td>
            </tr>
            <tr>
                <td>V-02</td>
                <td>Energización inicial y arranque de rectificador sin alarmas ni fallas internas.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_v02" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v02" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v02" value="NA"></td>
                <td>Display en estado normal / LED Line en verde</td>
            </tr>
            <tr>
                <td>V-03</td>
                <td>Medición de tensión de flotación de baterías en bus DC sin carga.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_v03" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v03" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v03" value="NA"></td>
                <td>Tensión DC dentro de tolerancia de catálogo</td>
            </tr>
            <tr>
                <td>V-04</td>
                <td>Arranque del inversor y estabilización de tensión de salida en vacío.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_v04" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v04" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v04" value="NA"></td>
                <td>Salida en 220 V ±1% / 60.0 Hz</td>
            </tr>
            <tr>
                <td>V-05</td>
                <td>Comprobación de luces indicadoras y selectora de la Caja de Transferencia INFRASOL.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_v05" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v05" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_v05" value="NA"></td>
                <td>Señalización LED correcta (Línea / Bypass)</td>
            </tr>
        </tbody>
    </table>

    <p style="font-style:italic;margin:5px 0 20px;">
        *Leyenda: C = Cumple / NC = No Cumple / N/A = No Aplica*
    </p>

    <h3 style="margin:20px 0 12px 5px;color:#34445e;">
        B. Checklist de Pruebas con Carga Real de Operación
    </h3>

    <table class="tabla-pruebas" style="width:100%;border-collapse:collapse;">
        <thead>
            <tr>
                <th>Ítem</th>
                <th>Descripción de la Prueba / Verificación</th>
                <th>C</th>
                <th>NC</th>
                <th>N/A</th>
                <th>Parámetro Esperado / Observaciones Medidas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>C-01</td>
                <td>Transferencia progresiva de cargas críticas (Tablero T-COM2).</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c01" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c01" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c01" value="NA"></td>
                <td>Carga conectada registrada: 19%</td>
            </tr>
            <tr>
                <td>C-02</td>
                <td><strong>Prueba de Corte de Red AC (Simulación de Apagón):</strong> Apertura de interruptor de entrada general.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c02" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c02" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c02" value="NA"></td>
                <td>Transferencia instantánea (0 ms) a baterías. Sin caída en cajas</td>
            </tr>
            <tr>
                <td>C-03</td>
                <td>Verificación de tiempo de autonomía estimado bajo la carga real.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c03" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c03" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c03" value="NA"></td>
                <td>Autonomía proyectada en display: [Anotar min]</td>
            </tr>
            <tr>
                <td>C-04</td>
                <td><strong>Prueba de Retorno de Red AC:</strong> Cierre de interruptor de entrada general.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c04" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c04" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c04" value="NA"></td>
                <td>Transferencia suave (Soft-Start) de baterías a red comercial</td>
            </tr>
            <tr>
                <td>C-05</td>
                <td><strong>Prueba de Bypass Estático del UPS:</strong> Transferencia forzada a bypass interno y retorno a Online.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c05" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c05" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c05" value="NA"></td>
                <td>Conmutación sin interrupción en la salida</td>
            </tr>
            <tr>
                <td>C-06</td>
                <td><strong>Prueba de Bypass Manual en Caja de Transferencia INFRASOL:</strong> Conmutación mecánica a posición Bypass y retorno a Normal.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c06" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c06" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c06" value="NA"></td>
                <td>Transferencia transparente sin reseteo de equipos críticos</td>
            </tr>
            <tr>
                <td>C-07</td>
                <td>Verificación de flujo de aire y funcionamiento al 100% de ventiladores de extracción.</td>
                <td><input class="opcion-checklist" type="radio" name="vi_c07" value="C"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c07" value="NC"></td>
                <td><input class="opcion-checklist" type="radio" name="vi_c07" value="NA"></td>
                <td>Flujo de aire continuo sin obstrucciones ni alarmas</td>
            </tr>
        </tbody>
    </table>

    <p style="font-style:italic;margin:5px 0 20px;">
        *Leyenda: C = Cumple / NC = No Cumple / N/A = No Aplica*
    </p>

</div>





 

<!-- =========================
     VII. MATRIZ DE DIAGNÓSTICO
========================== -->

<h2 class="seccion-titulo">
    VII. MATRIZ DE DIAGNÓSTICO, RIESGOS TÉCNICOS Y ACCIONES CORRECTIVAS
</h2>

<div class="matriz-diagnostico-editor">
    <table class="tabla-matriz-diagnostico"
           style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:12px;">
        <thead>
            <tr>
                <th style="width:19%;border:1px solid #b8cde5;background:#004777;color:white;padding:8px;">Ítem / Aspecto Evaluado</th>
                <th style="width:51%;border:1px solid #b8cde5;background:#004777;color:white;padding:8px;">Nivel de Riesgo, Título y Observación</th>
                <th style="width:30%;border:1px solid #b8cde5;background:#004777;color:white;padding:8px;">Acción Correctiva y Plazo (SLA)</th>
            </tr>
        </thead>

        <tbody class="matriz-riesgos-list">
            <tr class="riesgo-matriz">
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <input class="riesgo-aspecto" value="Climatización / HVAC"
                           style="width:100%;box-sizing:border-box;">
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <label>Nivel de riesgo</label>
                    <select class="riesgo-nivel" style="width:100%;margin-bottom:6px;">
                        <option>ALTO / CRÍTICO</option>
                        <option>MEDIO</option>
                        <option>BAJO</option>
                    </select>
                    <label>Título del riesgo</label>
                    <input class="riesgo-titulo" value="Riesgo de cortocircuito por agua"
                           style="width:100%;box-sizing:border-box;margin-bottom:6px;">
                    <label>Descripción de la observación</label>
                    <textarea class="riesgo-descripcion" rows="4"
                              style="width:100%;box-sizing:border-box;">La filtración o salpicadura de agua puede alcanzar gabinetes, borneras de fuerza o tarjetas electrónicas del UPS y la caja de transferencia, generando riesgo de arco eléctrico, cortocircuito y daños en el equipamiento.</textarea>
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <textarea class="riesgo-accion" rows="5"
                              style="width:100%;box-sizing:border-box;">Desviar provisionalmente el goteo fuera del equipamiento eléctrico y colocar protección temporal. Reparar la causa de la filtración.</textarea>
                    <button type="button" onclick="this.closest('.riesgo-matriz').remove()"
                            style="margin-top:6px;">Eliminar riesgo</button>
                </td>
            </tr>

            <tr class="riesgo-matriz">
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <input class="riesgo-aspecto" value="Climatización / HVAC"
                           style="width:100%;box-sizing:border-box;">
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <label>Nivel de riesgo</label>
                    <select class="riesgo-nivel" style="width:100%;margin-bottom:6px;">
                        <option>ALTO / CRÍTICO</option>
                        <option>MEDIO</option>
                        <option>BAJO</option>
                    </select>
                    <label>Título del riesgo</label>
                    <input class="riesgo-titulo" value="Degradación prematura de baterías VRLA"
                           style="width:100%;box-sizing:border-box;margin-bottom:6px;">
                    <label>Descripción de la observación</label>
                    <textarea class="riesgo-descripcion" rows="4"
                              style="width:100%;box-sizing:border-box;">La temperatura ambiental elevada puede reducir la vida útil de las baterías y disminuir la autonomía disponible del UPS.</textarea>
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <textarea class="riesgo-accion" rows="5"
                              style="width:100%;box-sizing:border-box;">Restablecer la climatización del cuarto y verificar la temperatura de operación y el estado del banco de baterías.</textarea>
                    <button type="button" onclick="this.closest('.riesgo-matriz').remove()"
                            style="margin-top:6px;">Eliminar riesgo</button>
                </td>
            </tr>

            <tr class="riesgo-matriz">
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <input class="riesgo-aspecto" value="Climatización / HVAC"
                           style="width:100%;box-sizing:border-box;">
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <label>Nivel de riesgo</label>
                    <select class="riesgo-nivel" style="width:100%;margin-bottom:6px;">
                        <option>ALTO / CRÍTICO</option>
                        <option selected>MEDIO</option>
                        <option>BAJO</option>
                    </select>
                    <label>Título del riesgo</label>
                    <input class="riesgo-titulo" value="Sobretemperatura y apagado del UPS"
                           style="width:100%;box-sizing:border-box;margin-bottom:6px;">
                    <label>Descripción de la observación</label>
                    <textarea class="riesgo-descripcion" rows="4"
                              style="width:100%;box-sizing:border-box;">El exceso de temperatura puede activar la protección térmica del UPS y provocar el apagado del equipo o la interrupción del suministro a las cargas.</textarea>
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <textarea class="riesgo-accion" rows="5"
                              style="width:100%;box-sizing:border-box;">Reparar el sistema de climatización y comprobar que la temperatura del ambiente se mantenga dentro del rango operativo requerido.</textarea>
                    <button type="button" onclick="this.closest('.riesgo-matriz').remove()"
                            style="margin-top:6px;">Eliminar riesgo</button>
                </td>
            </tr>

            <tr class="riesgo-matriz">
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <input class="riesgo-aspecto" value="Margen de carga eléctrica"
                           style="width:100%;box-sizing:border-box;">
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <label>Nivel de riesgo</label>
                    <select class="riesgo-nivel" style="width:100%;margin-bottom:6px;">
                        <option>ALTO / CRÍTICO</option>
                        <option selected>MEDIO</option>
                        <option>BAJO</option>
                    </select>
                    <label>Título del riesgo</label>
                    <input class="riesgo-titulo" value="Sobrecarga eléctrica"
                           style="width:100%;box-sizing:border-box;margin-bottom:6px;">
                    <label>Descripción de la observación</label>
                    <textarea class="riesgo-descripcion" rows="4"
                              style="width:100%;box-sizing:border-box;">El incremento de la demanda o los picos de arranque pueden provocar sobrecarga del UPS si se supera la capacidad disponible.</textarea>
                </td>
                <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                    <textarea class="riesgo-accion" rows="5"
                              style="width:100%;box-sizing:border-box;">Mantener la demanda conectada dentro de la capacidad nominal del UPS y revisar la carga antes de incorporar nuevos equipos.</textarea>
                    <button type="button" onclick="this.closest('.riesgo-matriz').remove()"
                            style="margin-top:6px;">Eliminar riesgo</button>
                </td>
            </tr>
        </tbody>
    </table>

    <button type="button"
        onclick="const editor=this.closest('.matriz-diagnostico-editor');editor.querySelector('.matriz-riesgos-list').append(editor.querySelector('template').content.cloneNode(true));"
        style="margin-top:12px;padding:9px 14px;background:#004777;color:white;border:0;border-radius:4px;cursor:pointer;">
        + AGREGAR OBSERVACIÓN / RIESGO
    </button>

    <template>
        <tr class="riesgo-matriz">
            <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                <input class="riesgo-aspecto" placeholder="Aspecto evaluado"
                       style="width:100%;box-sizing:border-box;">
            </td>
            <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                <label>Nivel de riesgo</label>
                <select class="riesgo-nivel" style="width:100%;margin-bottom:6px;">
                    <option>ALTO / CRÍTICO</option>
                    <option>MEDIO</option>
                    <option>BAJO</option>
                </select>
                <label>Título del riesgo</label>
                <input class="riesgo-titulo" placeholder="Escriba el título del riesgo"
                       style="width:100%;box-sizing:border-box;margin-bottom:6px;">
                <label>Descripción de la observación</label>
                <textarea class="riesgo-descripcion" rows="4"
                          placeholder="Describa la observación"
                          style="width:100%;box-sizing:border-box;"></textarea>
            </td>
            <td style="border:1px solid #b8cde5;padding:7px;vertical-align:top;">
                <textarea class="riesgo-accion" rows="5"
                          placeholder="Acción correctiva y plazo"
                          style="width:100%;box-sizing:border-box;"></textarea>
                <button type="button" onclick="this.closest('.riesgo-matriz').remove()"
                        style="margin-top:6px;">Eliminar riesgo</button>
            </td>
        </tr>
    </template>
</div>



<p style="font-size:10px;font-style:italic;margin-top:10px;">
    *INFRASOL no asume garantía por daños/cortocircuitos causados por agua
    o humedad de equipos externos, ni por apagados térmicos o pérdida de
    autonomía de baterías.*
</p>


<!-- =========================
    VIII. REGISTRO FOTOGRÁFICO
========================== -->

<h2 class="seccion-titulo">
    VIII. REGISTRO FOTOGRÁFICO
</h2>

<p style="font-size:12px;font-style:italic;color:#475569;">
    Este registro constituye la evidencia legal y técnica del estado de entrega
    frente a manipulación posterior por parte de terceros.
</p>

<div class="reporteFotografico"></div>






        </div>

        `;

    }

const descripcionesFotos = [
    { titulo: "Montaje y Fijación de Caja de Transferencia" },
    { titulo: "Detalle de Cableado, Peinado y Borneras" },
    { titulo: "Conectores / Tomas Industriales (Mennekes) y Salidas" },
    { titulo: "Pantalla LCD de UPS - Modo Vacío" },
    { titulo: "Pantalla LCD de UPS - Modo con Carga Real" },
    { titulo: "Evidencia de Condición Anómala / Aire Acondicionado" },
    { titulo: "Situación Final Panorámica y Limpieza del Área" }
];
function generarReporteFotografico() {
    const contenedores = document.querySelectorAll(".reporteFotografico");

    const cantidadUPS = Math.max(
        1,
        parseInt(document.getElementById("cantidadEquipos")?.value, 10) || 1
    );

    contenedores.forEach(contenedor => {
        contenedor.replaceChildren();

        contenedor.style.display = "block";
        contenedor.style.width = "100%";
        contenedor.style.marginTop = "15px";

        function crearItem(numero, titulo, identificador = "") {
            const punto = document.createElement("div");
            punto.className = "foto-item";

            punto.style.cssText = `
                display:block;
                width:100%;
                box-sizing:border-box;
                border:1px solid #b8cde5;
                border-radius:4px;
                padding:12px;
                margin:12px 0;
                background:#ffffff;
            `;

            const tituloVisible = identificador
                ? `${numero}. ${titulo} - UPS ${identificador}`
                : `${numero}. ${titulo}`;

            const encabezado = document.createElement("div");
            encabezado.className = "foto-titulo";
            encabezado.textContent = tituloVisible;
            encabezado.style.cssText = `
                color:#004777;
                font-weight:bold;
                margin-bottom:12px;
                font-size:13px;
            `;

            const campos = document.createElement("div");
            campos.className = "fotos-item-campos";
            campos.style.cssText = `
                display:grid;
                grid-template-columns:repeat(2,minmax(0,1fr));
                gap:12px;
            `;

            for (let i = 1; i <= 2; i++) {
                const etiqueta = document.createElement("label");
                etiqueta.textContent = `Foto ${i}`;
                etiqueta.style.cssText = `
                    display:block;
                    font-size:12px;
                    font-weight:600;
                    color:#34445e;
                `;

                const entrada = document.createElement("input");
                entrada.type = "file";
                entrada.accept = "image/*";
                entrada.style.cssText = `
                    display:block;
                    width:100%;
                    box-sizing:border-box;
                    margin-top:6px;
                    padding:7px;
                    border:1px solid #b8cde5;
                    border-radius:4px;
                    background:#f8fbff;
                `;

                etiqueta.appendChild(entrada);
                campos.appendChild(etiqueta);
            }

            punto.appendChild(encabezado);
            punto.appendChild(campos);
            contenedor.appendChild(punto);
        }

        // Ítem 1
        crearItem(1, "Estado Inicial del Área");

        // Ítem 2
        crearItem(2, "Diagrama Unifilar");

        // Ítem 3
        crearItem(3, "Tablero Eléctrico");

        // Ítem 4 en adelante: montaje físico de cada UPS
        for (let ups = 1; ups <= cantidadUPS; ups++) {
            crearItem(
                3 + ups,
                "Montaje Físico de UPS",
                String(ups).padStart(2, "0")
            );
        }

        // Continuar la numeración de los ítems restantes
        descripcionesFotos.forEach((item, indice) => {
            crearItem(
                4 + cantidadUPS + indice,
                item.titulo
            );
        });

        const botonAgregar = document.createElement("button");
        botonAgregar.type = "button";
        botonAgregar.textContent = "+ AGREGAR ÍTEM FOTOGRÁFICO";
        botonAgregar.className = "btn-agregar-punto";
        botonAgregar.style.cssText = `
            background:#004777;
            color:white;
            border:0;
            border-radius:4px;
            padding:10px 14px;
            cursor:pointer;
            margin:10px 0;
        `;

        botonAgregar.addEventListener("click", () => {
            const numero = contenedor.querySelectorAll(".foto-item").length + 1;
            const punto = document.createElement("div");
            punto.className = "foto-item";

            punto.style.cssText = `
                display:block;
                border:1px solid #b8cde5;
                padding:12px;
                margin:12px 0;
                background:white;
            `;

            punto.innerHTML = `
                <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
                    <strong style="color:#004777;">${numero}.</strong>
                    <input type="text" class="titulo-foto-extra"
                        placeholder="Escriba el título del ítem"
                        style="flex:1;min-width:0;padding:7px;">
                    <button type="button" class="btn-eliminar-punto">
                        Eliminar
                    </button>
                </div>
                <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;">
                    <label>Foto 1:
                        <input type="file" accept="image/*" style="display:block;width:100%;margin-top:6px;">
                    </label>
                    <label>Foto 2:
                        <input type="file" accept="image/*" style="display:block;width:100%;margin-top:6px;">
                    </label>
                </div>
            `;

            punto.querySelector(".btn-eliminar-punto")
                .addEventListener("click", () => punto.remove());

            contenedor.insertBefore(punto, botonAgregar);
        });

        contenedor.appendChild(botonAgregar);
    });
}

    document
    .getElementById("btnPDF")
    .addEventListener(
        "click",
        generarPDF
    );
    function dibujarSeccion(
        pdf,
        titulo,
        texto,
        y
    ){

        pdf.setDrawColor(0);

        pdf.rect(
            5,
            y,
            190,
            60
        );

    pdf.setFillColor(
        68,
        84,
        106
    );

        pdf.rect(
            5,
            y,
            190,
            10,
            "F"
        );

    pdf.line(
        5,
        y + 10,
        195,
        y + 10
    );

        pdf.setFont(
            "times",
            "bold"
        );

        pdf.setFontSize(11);

        pdf.text(
            titulo,
            12,
            y + 7
        );

        pdf.setFont(
            "times",
            "normal"
        );

        pdf.setFontSize(10);

        const textoFormateado =
        pdf.splitTextToSize(
            texto,
            165
        );

        pdf.text(
            textoFormateado,
            12,
            y + 20
        );

        return {
            textoFormateado,
            finalY : y + 60
        };

    }
    async function generarPDF(){

        const { jsPDF } = window.jspdf;

        const codigo =
        document.getElementById("codigoInforme").value;

        const equipos =
    document.querySelectorAll(".equipo-card");

        
    const logo = new Image();

    logo.src = "Infrasol_Logo.png";

    await new Promise((resolve) => {

        logo.onload = resolve;

        logo.onerror = resolve;

    });
    // =========================
    // ENCABEZADO CORPORATIVO
    // =========================

    // =========================
    // ENCABEZADO CORPORATIVO
    // =========================

    // =========================
    // ENCABEZADO CORPORATIVO
    // =========================

    function dibujarEncabezado(pdf){

        // Fondo gris claro
        pdf.setFillColor(
            242,
            242,
            242
        );

        pdf.rect(
            0,
            0,
            210,
            14,
            "F"
        );


        // =========================
        // LOGO INFRASOL
        // =========================

        if(logo.complete && logo.naturalWidth > 0){
    pdf.addImage(
        logo,
        "PNG",
        10,
        0.5,
        15,
        14
    );

        }


        // =========================
        // BARRA AZUL
        // =========================

        pdf.setFillColor(
            68,
            84,
            106
        );

        pdf.rect(
            186,
            0,
            8,
            14,
            "F"
        );


        // =========================
        // BARRA AMARILLA
        // =========================

        pdf.setFillColor(
            255,
            192,
            0
        );

        pdf.rect(
            194,
            0,
            8,
            14,
            "F"
        );


        // =========================
        // BARRA GRIS
        // =========================

        pdf.setFillColor(
            165,
            165,
            165
        );

        pdf.rect(
            202,
            0,
            8,
            14,
            "F"
        );

    }

    for(let indice = 0; indice < equipos.length; indice++){

        const pdf =
            new jsPDF("p","mm","a4");

        const codigoEquipo =
    `ITMU-${String(contador + indice).padStart(4,"0")}`;

        const equipoActual = equipos[indice];

    const cliente =
    equipoActual.querySelector(".cliente-select")?.selectedOptions[0].text || "";
    const ruc =
    equipoActual.querySelector(".ruc-input")?.value || "";

    const ubicacion =
    equipoActual.querySelector(".ubicacion-input")?.value || "";

    const local =
    equipoActual.querySelector(".local-select")?.value || "";

    const equipo =
    equipoActual.querySelector(".equipo-input")?.value || "";

    const equiposEnergizados =
        equipoActual.querySelector(".equipos-energizados-input")?.selectedOptions[0]?.text.trim() || "";

        const servicio =
    equipoActual.querySelector(".servicio-input")?.value || "";

    const fecha =
    equipoActual.querySelector(".fecha-input")?.value || "";


    pdf.setFont(
        "times",
        "bold"
    );

    pdf.setFontSize(14);

    pdf.text(
        "INFORME TÉCNICO N° " + String(contador + indice).padStart(3,"0"),
        105,
        34,
        { align:"center" }
    );


    pdf.line(
        10,
        40,
        200,
        40
    );
    const eq =
    equipoActual.querySelector(
    ".tabla-info tbody tr td:nth-child(1) input"
    )?.value || "";

    const marca =
    equipoActual.querySelector(
    ".tabla-info tbody tr td:nth-child(2) input"
    )?.value || "";

    const modelo =
    equipoActual.querySelector(
    ".tabla-info tbody tr td:nth-child(3) input"
    )?.value || "";

    const capacidad =
    equipoActual.querySelector(
    ".tabla-info tbody tr td:nth-child(4) input"
    )?.value || "";

    const serie =
    equipoActual.querySelector(
    ".tabla-info tbody tr td:nth-child(5) input"
    )?.value || "";
    const tipoRack =
    equipoActual.querySelectorAll(
    ".tabla-info"
    )[1]?.querySelector(
    "tbody tr td:nth-child(1) input"
    )?.value || "";

    const tarjetaRed =
    equipoActual.querySelectorAll(
    ".tabla-info"
    )[1]?.querySelector(
    "tbody tr td:nth-child(2) input"
    )?.value || "";

    const soporteTorre =
    equipoActual.querySelectorAll(
    ".tabla-info"
    )[1]?.querySelector(
    "tbody tr td:nth-child(3) input"
    )?.value || "";

    const cajaTransferencia =
    equipoActual.querySelectorAll(
    ".tabla-info"
    )[1]?.querySelector(
    "tbody tr td:nth-child(4) input"
    )?.value || "";


    // ==========================================
    // I. DATOS DEL CLIENTE Y UBICACIÓN
    // ==========================================

    const localArea = [
        local,
        ubicacion
    ].filter(valor => valor && valor.trim() !== "").join(" | ");

    const tecnicoResponsable =
        equipoActual.querySelector(
            ".tecnico-responsable-input"
        )?.value.trim() || "";

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(31, 41, 55);

    pdf.text(
        "I. DATOS DEL CLIENTE Y UBICACIÓN",
        15,
        46
    );

    pdf.autoTable({

        startY: 50,

        theme: "grid",

    margin: {
    left: 15,
    right: 15
    },
    tableWidth: 180,

        styles: {
            font: "helvetica",
            fontSize: 9,
            textColor: [45, 55, 72],
            lineColor: [0, 0, 0],
            lineWidth: 0.2,
            cellPadding: 2
        },

        head: [[
            "CONCEPTO",
            "DETALLE"
        ]],

        body: [

            [
                "Cliente",
                cliente + (ruc ? " (RUC: " + ruc + ")" : "")
            ],

            [
                "Local / Área",
                localArea
            ],

            [
                "Fecha de Intervención",
                fecha
            ],

            [
                "Técnico Responsable",
                tecnicoResponsable
            ]

        ],

        headStyles: {
            fillColor: [198, 215, 238],
            textColor: [31, 41, 55],
            fontStyle: "normal",
            halign: "left"
        },

columnStyles: {
    0: {
        cellWidth: 90,
        fontStyle: "bold"
    },
    1: {
        cellWidth: 90
    }
}

    });
// ==========================================
// DESCRIPCIÓN DEL SERVICIO JUSTIFICADA
// ==========================================

const xServicio = 15;
const anchoServicio = 180;

const textoServicio =
    "El presente servicio comprendió la modernización del sistema de energía estabilizada para las cargas críticas del establecimiento (línea de cajas, servidores locales y equipamiento de comunicaciones). La intervención se llevó a cabo aplicando los lineamientos de seguridad y el uso obligatorio de EPP. Con esta implementación se garantiza la continuidad de la operación comercial, protegiendo las cargas críticas durante la transición y encendido del grupo electrógeno.";

let y = pdf.lastAutoTable.finalY + 18;

pdf.setFont("helvetica", "normal");
pdf.setFontSize(9.5);
pdf.setTextColor(68, 84, 106);
pdf.setFontSize(9.5);
pdf.setTextColor(68, 84, 106);

const altoLinea = 5;

// Dibuja una línea justificada distribuyendo las palabras.
function dibujarLineaJustificada(partes, x, y, ancho) {
    let totalAnchoTexto = 0;
    let totalEspacios = 0;

    partes.forEach((parte) => {
        pdf.setFont("helvetica", parte.negrita ? "bold" : "normal");
        totalAnchoTexto += pdf.getTextWidth(parte.texto);
        totalEspacios += parte.texto.split(" ").length - 1;
    });

    const espacioExtra = totalEspacios > 0
        ? (ancho - totalAnchoTexto) / totalEspacios
        : 0;

    let xActual = x;

    partes.forEach((parte) => {
        pdf.setFont("helvetica", parte.negrita ? "bold" : "normal");

        const palabras = parte.texto.split(" ");

        palabras.forEach((palabra, indice) => {
            pdf.text(palabra, xActual, y);
            xActual += pdf.getTextWidth(palabra);

            if (indice < palabras.length - 1) {
                xActual += espacioExtra;
            }
        });
    });
}

const lineasDescripcion = [
    [
        { texto: "El presente servicio comprendió la modernización del sistema de energía estabilizada para las cargas críticas" }
    ],
    [
        { texto: "del establecimiento (línea de cajas, servidores locales y equipamiento de comunicaciones). La intervención se" }
    ],
    [
        { texto: "llevó a cabo aplicando los lineamientos de seguridad y el uso obligatorio de EPP. " },
        { texto: "Con esta implementación se", negrita: true }
    ],
    [
        { texto: "garantiza la continuidad de la operación comercial, protegiendo las cargas críticas durante la transición y", negrita: true }
    ],
    [
        { texto: "encendido del grupo electrógeno.", negrita: true }
    ]
];

lineasDescripcion.forEach((partes, indice) => {
    const esUltima = indice === lineasDescripcion.length - 1;

    if (esUltima) {
        let xActual = xServicio;

        partes.forEach((parte) => {
            pdf.setFont("helvetica", parte.negrita ? "bold" : "normal");
            pdf.text(parte.texto, xActual, y + indice * altoLinea);
            xActual += pdf.getTextWidth(parte.texto);
        });
    } else {
        dibujarLineaJustificada(
            partes,
            xServicio,
            y + indice * altoLinea,
            anchoServicio
        );
    }
});

y += lineasDescripcion.length * altoLinea + 8;


    const epps = [];

    equipoActual.querySelectorAll(
        ".inspeccion-box .checklist-item"
    ).forEach(item => {
        const check = item.querySelector("input[type='checkbox']");
        const texto = item.querySelector("label")?.textContent.trim();

        if (check?.checked && texto) {
            epps.push("• " + texto);
        }
    });

    const tablasEquipo =
    equipoActual.querySelectorAll(
        ".tabla-info"
    );

    const datosUPSAntiguo =
    [...tablasEquipo[0].querySelectorAll("tbody tr")]
    .map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

    const datosUPSNuevo =
    [...tablasEquipo[1].querySelectorAll("tbody tr")]
    .map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

    const datosCajaAntigua =
    [...tablasEquipo[2].querySelectorAll("tbody tr")]
    .map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

    const datosCajaNueva =
    [...tablasEquipo[3].querySelectorAll("tbody tr")]
    .map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

    let yInspeccion =
    y - 3;

    const alcanceTrabajos = [
        {
            titulo: "Desmontaje:",
            texto: "Retiro seguro de UPS preexistente."
        },
        {
            titulo: "Montaje:",
            texto: "Instalación física y fijación de nuevo UPS SALICRU y caja de transferencia INFRASOL."
        },
        {
            titulo: "Conexionado Eléctrico:",
            texto: "Cableado de entrada, salida y bypass ejecutado con conductores de calibre File y terminales File."
        },
        {
            titulo: "Puesta a Tierra:",
            texto: "Integración directa al Sistema de Puesta a Tierra (SPAT) del cuarto de comunicaciones."
        },
        {
            titulo: "Configuración:",
            texto: "Programación de parámetros iniciales (Voltaje, Frecuencia y Corriente de carga de baterías)."
        }
    ];
// ==========================================
// II. DATOS TÉCNICOS DE LOS EQUIPOS
// ==========================================

pdf.setFont("helvetica", "bold");
pdf.setFontSize(12);
pdf.setTextColor(31, 41, 55);

pdf.text(
    "II. DATOS TÉCNICOS DE LOS EQUIPOS",
    15,
    yInspeccion + 5
);

const datosTecnicos = [
    [
        "UPS (Retirado)",
        `${datosUPSAntiguo[1] || ""} ${datosUPSAntiguo[2] || ""}`.trim(),
        datosUPSAntiguo[3] || "",
        datosUPSAntiguo[4] || ""
    ],
    [
        "UPS (Instalado)",
        `${datosUPSNuevo[1] || ""} ${datosUPSNuevo[2] || ""}`.trim(),
        datosUPSNuevo[3] || "",
        datosUPSNuevo[4] || ""
    ],
    [
        "Caja Transf. (Retirada)",
        datosCajaAntigua[1] || "",
        datosCajaAntigua[3] || "N/A",
        "N/A"
    ],
    [
        "Caja Transf. (Instalada)",
        datosCajaNueva[1] || "[Anotar valor real medido]",
        datosCajaNueva[3] || "[Anotar valor real medido]",
        "N/A"
    ]
];

pdf.autoTable({
    startY: yInspeccion + 10,
    margin: {
        left: 15,
        right: 15
    },
    tableWidth: 180,
    theme: "grid",
    head: [[
        "Equipo",
        "Marca / Modelo",
        "Número de Serie",
        "Capacidad / Topología"
    ]],
    body: datosTecnicos,
    styles: {
        font: "helvetica",
        fontSize: 8.5,
        textColor: [31, 41, 55],
        lineColor: [0, 0, 0],
        lineWidth: 0.2,
        cellPadding: 2,
        valign: "middle",
        overflow: "linebreak"
    },
    headStyles: {
        fillColor: [198, 215, 237],
        textColor: [31, 41, 55],
        fontStyle: "bold",
        halign: "center"
    },
    columnStyles: {
        0: { cellWidth: 43 },
        1: { cellWidth: 45 },
        2: { cellWidth: 44 },
        3: { cellWidth: 48 }
    },
    pageBreak: "avoid"
});

let yEquipos = pdf.lastAutoTable.finalY + 8;
// ==========================================
// III. ALCANCE DEL SERVICIO (TRABAJOS REALIZADOS)
// ==========================================

const xCajaAlcance = 15;
const anchoCajaAlcance = 180;
const xViñeta = 21;
const xTextoAlcance = 25;
const xDescripcion = 70;
const anchoDescripcion = 118;
const altoLineaAlcance = 5;
const espacioEntrePuntos = 3;

const trabajosPDF = alcanceTrabajos.map(trabajo => ({
    ...trabajo,
    lineas: pdf.splitTextToSize(
        trabajo.texto,
        anchoDescripcion
    )
}));

const alturaContenido = trabajosPDF.reduce(
    (total, trabajo) =>
        total +
        Math.max(1, trabajo.lineas.length) * altoLineaAlcance +
        espacioEntrePuntos,
    0
);

const alturaCajaAlcance = alturaContenido + 20;

// Colocar III debajo de la tabla II
let yAlcance = pdf.lastAutoTable.finalY + 5;

// Evitar que el recuadro se salga de la página
if (yAlcance + alturaCajaAlcance > 285) {
    yAlcance = pdf.lastAutoTable.finalY + 3;
}

// Fondo celeste del encabezado
pdf.setFillColor(198, 215, 237);
pdf.rect(
    xCajaAlcance,
    yAlcance,
    anchoCajaAlcance,
    10,
    "F"
);

// Título
pdf.setTextColor(31, 41, 55);
pdf.setFont("helvetica", "bold");
pdf.setFontSize(11);

pdf.text(
    "III. ALCANCE DEL SERVICIO (TRABAJOS REALIZADOS)",
    20,
    yAlcance + 7
);

// Texto de los cinco puntos
let yPunto = yAlcance + 18;

trabajosPDF.forEach(trabajo => {
    pdf.setTextColor(31, 41, 55);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    pdf.text("•", xViñeta, yPunto);

    pdf.setFont("helvetica", "bold");
    pdf.text(
        trabajo.titulo,
        xTextoAlcance,
        yPunto
    );

    pdf.setFont("helvetica", "normal");
    pdf.text(
        trabajo.lineas,
        xDescripcion,
        yPunto
    );

    yPunto +=
        Math.max(1, trabajo.lineas.length) * altoLineaAlcance +
        espacioEntrePuntos;
});

// Cerrar el recuadro sin tapar el texto
pdf.setDrawColor(0, 0, 0);
pdf.setLineWidth(0.3);

pdf.rect(
    xCajaAlcance,
    yAlcance,
    anchoCajaAlcance,
    alturaCajaAlcance,
    "S"
);
 // ==========================================
// IV. PARÁMETROS ELÉCTRICOS Y MEDICIONES
// ==========================================

pdf.addPage();

const tablaParametros =
    equipoActual.querySelector(".tabla-parametros-resumen");

pdf.setFont("helvetica", "bold");
pdf.setFontSize(11);
pdf.setTextColor(31, 41, 55);

pdf.text(
    "IV. PARÁMETROS ELÉCTRICOS Y MEDICIONES (CON CARGA CONECTADA)",
    15,
    25
);

pdf.setFont("helvetica", "italic");
pdf.setFontSize(9);
pdf.setTextColor(68, 84, 106);

pdf.text(
    "Sistema Eléctrico Referencial: 230 Voltios - 1Φ+N+T / 60Hz",
    15,
    34
);

const datosParametros = Array.from(
    tablaParametros.querySelectorAll("tbody tr")
).map(fila => {
    const celdas = fila.querySelectorAll("th, td");

    return [
        celdas[0].textContent.trim(),
        celdas[1].querySelector("input").value,
        celdas[2].querySelector("input").value
    ];
});

pdf.autoTable({
    startY: 40,

    margin: {
        left: 15,
        right: 15
    },

    tableWidth: 180,

    theme: "grid",

    head: [[
        "Parámetro Medido",
        "UPS (Medición Final)",
        "Caja de Transferencia"
    ]],

    body: datosParametros,

    styles: {
        font: "helvetica",
        fontSize: 8,
        textColor: [31, 41, 55],
        lineColor: [0, 0, 0],
        lineWidth: 0.2,
        cellPadding: 2,
        valign: "middle",
        overflow: "linebreak"
    },

    headStyles: {
        fillColor: [198, 215, 237],
        textColor: [31, 41, 55],
        fontStyle: "bold"
    },

    columnStyles: {
        0: {
            cellWidth: 58,
            fontStyle: "bold"
        },
        1: {
            cellWidth: 61
        },
        2: {
            cellWidth: 61
        }
    },

    pageBreak: "avoid"
});



    // ==========================================
    // V. REGISTRO DE MATERIALES Y CONSUMIBLES
    // ==========================================

    const yMateriales = pdf.lastAutoTable.finalY + 12;
    const tablaMateriales = equipoActual.querySelector(
        ".tabla-materiales"
    );

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);

    pdf.text(
        "V. REGISTRO DE MATERIALES Y CONSUMIBLES (CONTROL DE EXCEDENTES)",
        15,
        yMateriales
    );

    const notaMateriales =
        "(Nota Explicativa: El alcance estándar de instalación contratado incluye hasta un máximo de 3.0 metros lineales de cableado por polo. Todo metraje o insumo adicional utilizado debido a la distancia real del recorrido en la tienda deberá registrarse en esta tabla para su correspondiente liquidación y facturación de adicionales).";

    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(9);
    pdf.setTextColor(68, 84, 106);

    const lineasNotaMateriales = pdf.splitTextToSize(
        notaMateriales,
        180
    );

    pdf.text(
        lineasNotaMateriales,
        15,
        yMateriales + 10,
        {
            lineHeightFactor: 1.4
        }
    );

    const datosMateriales = Array.from(
        tablaMateriales.querySelectorAll("tbody tr")
    ).map(fila => {
        const celdas = fila.querySelectorAll("td");

        return Array.from(celdas).map(celda => {
            const input = celda.querySelector("input");

            return input
                ? input.value
                : celda.textContent.trim();
        });
    });

    const yTablaMateriales =
    yMateriales + 10 + (lineasNotaMateriales.length * 4);

    pdf.autoTable({
    startY: yTablaMateriales + 3,

        margin: {
            left: 15,
            right: 15,
            bottom: 15
        },

        tableWidth: 180,

        theme: "grid",

        head: [[
            "Material / Consumible",
            "Cantidad Estándar Incluida",
            "Cantidad Total Utilizada",
            "Excedente / Adicional a Facturar"
        ]],

        body: datosMateriales,

        styles: {
            font: "helvetica",
            fontSize: 8.5,
            textColor: [52, 68, 94],
            lineColor: [0, 0, 0],
            lineWidth: 0.2,
            cellPadding: 2,
            valign: "middle",
            overflow: "linebreak"
        },

        headStyles: {
            fillColor: [198, 215, 237],
            textColor: [52, 68, 94],
            fontStyle: "normal",
            halign: "center",
            valign: "middle"
        },

        columnStyles: {
            0: { cellWidth: 43 },
            1: { cellWidth: 45 },
            2: { cellWidth: 46 },
            3: { cellWidth: 46 }
        },

        didParseCell: function(data) {
            if (
                data.section === "body" &&
                data.column.index === 0
            ) {
                data.cell.styles.fontStyle = "bold";
            }
        },

        pageBreak: "auto",
        rowPageBreak: "avoid"
    });

 
    // ==========================================
    // VI. PROTOCOLO DE PRUEBAS Y COMISIONAMIENTO
    // ==========================================

    pdf.addPage();

    let yPruebas = 25;

pdf.setFillColor(199, 216, 238);
pdf.rect(15, yPruebas, 180, 10, "F");

pdf.setFont("times", "bold");
pdf.setFontSize(11);
pdf.setTextColor(30, 45, 65);

pdf.text(
    "VI. PROTOCOLO DE PRUEBAS Y COMISIONAMIENTO (COMMISSIONING)",
    20,
    yPruebas + 7,
    { maxWidth: 170 }
);

    pdf.setTextColor(0, 0, 0);

    pdf.setFont("times", "normal");
    pdf.setFontSize(9);

    pdf.text(
        "Seleccione una sola opción por cada ítem: C = Cumple, NC = No Cumple o N/A = No Aplica.",
        20,
        yPruebas + 19,
        { maxWidth: 175 }
    );

    const tablasChecklist = equipoActual.querySelectorAll(
        ".tabla-pruebas"
    );

    const titulosChecklist = [
        "A. Checklist de Pruebas en Vacío (Sin Carga Conectada)",
        "B. Checklist de Pruebas con Carga Real de Operación"
    ];

    for (let indiceTabla = 0; indiceTabla < tablasChecklist.length; indiceTabla++) {

        const tablaHTML = tablasChecklist[indiceTabla];

        const filasHTML = tablaHTML.querySelectorAll("tbody tr");

        const cuerpoTabla = [];

        filasHTML.forEach(fila => {

            const celdas = fila.querySelectorAll("td");

            if (celdas.length < 6) return;

            const item = celdas[0].innerText.trim();
            const descripcion = celdas[1].innerText.trim();
            const esperado = celdas[5].innerText.trim();

            const opcionSeleccionada = fila.querySelector(
                'input.opcion-checklist[type="radio"]:checked'
            );

            const valorSeleccionado = opcionSeleccionada
                ? opcionSeleccionada.value
                : "";

            cuerpoTabla.push([
                item,
                descripcion,
                valorSeleccionado === "C" ? "X" : "",
                valorSeleccionado === "NC" ? "X" : "",
                valorSeleccionado === "NA" ? "X" : "",
                esperado
            ]);
        });

        let ySubtitulo;

        if (indiceTabla === 0) {
            ySubtitulo = yPruebas + 27;
        } else {
            ySubtitulo = pdf.lastAutoTable.finalY + 15;
        }

        pdf.setFont("times", "bold");
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);

        pdf.text(
            titulosChecklist[indiceTabla] || `Checklist ${indiceTabla + 1}`,
            20,
            ySubtitulo,
            { maxWidth: 175 }
        );

        pdf.autoTable({
            startY: ySubtitulo + 5,
            margin: {
                left: 15,
                right: 15,
                bottom: 18
            },
            theme: "grid",
            head: [[
                "Ítem",
                "Descripción de la Prueba / Verificación",
                "C",
                "NC",
                "N/A",
                "Parámetro Esperado / Observaciones"
            ]],
            body: cuerpoTabla,
            styles: {
                font: "times",
                fontSize: 7,
                cellPadding: 2,
                lineColor: [0, 0, 0],
                lineWidth: 0.2,
                textColor: [0, 0, 0],
                overflow: "linebreak",
                valign: "middle"
            },
            headStyles: {
                fillColor: [199, 216, 238],
                textColor: [30, 45, 65],
                fontStyle: "bold",
                halign: "center"
            },
            columnStyles: {
                0: { cellWidth: 13, halign: "center" },
                1: { cellWidth: 62 },
                2: { cellWidth: 9, halign: "center" },
                3: { cellWidth: 9, halign: "center" },
                4: { cellWidth: 10, halign: "center" },
                5: { cellWidth: 77 }
            },
            rowPageBreak: "avoid"
        });

        pdf.setFont("times", "italic");
        pdf.setFontSize(8);

        pdf.text(
            "Leyenda: C = Cumple / NC = No Cumple / N/A = No Aplica",
            15,
            pdf.lastAutoTable.finalY + 5
        );
    }

    pdf.setTextColor(0, 0, 0);

    function leerImagen(file){

        return new Promise((resolve)=>{

            const reader =
            new FileReader();

            reader.onload = function(e){

                resolve(
                    e.target.result
                );

            };

            reader.readAsDataURL(file);

        });

    }
    function leerImagen(file){

        return new Promise((resolve)=>{

            const reader =
            new FileReader();

            reader.onload = function(e){

                resolve(
                    e.target.result
                );

            };

            reader.readAsDataURL(file);

        });

    }


    // =========================
    // VII. REGISTRO VISUAL
    // UN PUNTO POR PÁGINA
    // =========================
async function dibujarRegistroFotografico() {
    const puntosFotos =
        equipoActual.querySelectorAll(
            ".reporteFotografico .foto-item"
        );


    for(let i = 0; i < puntosFotos.length; i++){

        const punto =
            puntosFotos[i];

        // =========================
        // NUEVA HOJA
        // =========================

        pdf.addPage();


        // =========================
        // VII. REGISTRO VISUAL
        // NO INVADIR ENCABEZADO
        // =========================

        if(i === 0){

            pdf.setFillColor(
                68,
                84,
                106
            );

            pdf.rect(
                20,
                20,
                170,
                12,
                "F"
            );

            pdf.rect(
                20,
                20,
                170,
                12
            );

            pdf.setFont(
                "times",
                "bold"
            );

            pdf.setFontSize(11);

            pdf.setTextColor(
                255,
                255,
                255
            );

            pdf.text(
                "VIII. REGISTRO FOTOGRÁFICO",
                25,
                28
            );

            pdf.setTextColor(
                0,
                0,
                0
            );

        }


        // =========================
        // OBTENER TÍTULO
        // =========================

        const tituloInput =
            punto.querySelector(
                ".titulo-foto-extra"
            );

        let titulo = "";

        if(tituloInput){

            const numero =
                punto.querySelector(
                    ".foto-titulo"
                )?.childNodes[0]?.textContent.trim() || "";

            titulo =
                `${numero} ${tituloInput.value.toUpperCase()}`.trim();

        }else{

            titulo =
                punto.querySelector(
                    ".foto-titulo"
                )?.textContent.trim() || "";

        }


        // =========================
        // OBTENER FOTOS
        // =========================

        const archivos =
            punto.querySelectorAll(
                'input[type="file"]'
            );

        const fotosPunto = [];

        for(let j = 0; j < archivos.length; j++){

            if(!archivos[j].files[0]){
                continue;
            }

            const imagenBase64 =
                await leerImagen(
                    archivos[j].files[0]
                );

            fotosPunto.push(
                imagenBase64
            );

        }


    // =========================
    // FOTO 1
    // =========================

    if(fotosPunto[0]){

    pdf.addImage(
        fotosPunto[0],
        "JPEG",
        50.58,
        i === 0 ? 51 : 46,
        108.84,
        91
    );

    }


    // =========================
    // FOTO 2
    // =========================

    if(fotosPunto[1]){

    pdf.addImage(
        fotosPunto[1],
        "JPEG",
        50.58,
        i === 0 ? 150 : 145,
        108.84,
        91
    );

    }


    // =========================
    // TÍTULO DEL PUNTO
    // =========================

    pdf.setFillColor(
        165,
        165,
        165
    );

    pdf.rect(
        55,
        i === 0 ? 34 : 24,
        100,
        10,
        "F"
    );

    pdf.rect(
        55,
        i === 0 ? 34 : 24,
        100,
        10
    );  

    pdf.setFont(
        "times",
        "bold"
    );

    let tituloPDF =
        titulo.replace(
            /^\d+\.\s*/,
            ""
        );

    pdf.setFontSize(10);

    pdf.setTextColor(
        255,
        255,
        255
    );

    pdf.text(
        tituloPDF,
        105,
        i === 0 ? 41 : 31,
        {
            align:"center"
        }
    );

    pdf.setTextColor(
        0,
        0,
        0
    );

    }
}

const camposConclusiones =
    equipoActual.querySelectorAll(
        ".campo-conclusiones textarea"
    );

    const conclusiones =
        camposConclusiones[0]?.value || "";

    const observacion =
        camposConclusiones[1]?.value || "";




    // =========================
    // VIII, IX Y X
    // EN UNA MISMA HOJA
    // =========================

    pdf.addPage();

    let yFinal = 25;

    function dibujarBloqueFinal(titulo, texto, y){

        const textoFormateado =
            pdf.splitTextToSize(
                texto || "",
                170
            );

        const altura =
            (textoFormateado.length * 5) + 20;

        // Si el bloque no entra en la página,
        // empieza en una página nueva
        if (
            y + altura > 282
        ) {

            pdf.addPage();

            y = 20;

        }

        pdf.setFillColor(
            68,
            84,
            106
        );

        pdf.rect(
            15,
            y,
            180,
            10,
            "F"
        );

        pdf.line(
            15,
            y + 10,
            195,
            y + 10
        );

        pdf.setFont(
            "times",
            "bold"
        );

        pdf.setFontSize(11);

        pdf.setTextColor(
            255,
            255,
            255
        );

        pdf.text(
            titulo,
            20,
            y + 7
        );

        pdf.setTextColor(
            0,
            0,
            0
        );

        pdf.setFont(
            "helvetica",
            "normal"
        );

        pdf.setFontSize(10);

        pdf.text(
            textoFormateado,
            20,
            y + 17
        );

        pdf.rect(
            15,
            y,
            180,
            altura
        );

        return y + altura + 8;
    }



    // ==========================================
    // VII. MATRIZ DE DIAGNÓSTICO, RIESGOS
    // TÉCNICOS Y ACCIONES CORRECTIVAS
    // ==========================================

    const tituloMatriz =
        "VII. MATRIZ DE DIAGNÓSTICO, RIESGOS TÉCNICOS Y ACCIONES CORRECTIVAS";

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);

    const lineasTituloMatriz = pdf.splitTextToSize(tituloMatriz, 176);

    pdf.text(lineasTituloMatriz, 15, yFinal + 5);

    yFinal += (lineasTituloMatriz.length * 5) + 9;

    pdf.autoTable({
        startY: yFinal,
        margin: { left: 15, right: 15, bottom: 20 },
        theme: "grid",
        head: [[
            "Ítem / Aspecto Evaluado",
            "Hallazgo / Condición Observada",
            "Nivel de Riesgo y Salvedad de Garantía",
            "Acción Correctiva y Plazo (SLA)"
        ]],
      
body: Array.from(
    equipoActual.querySelectorAll(".riesgo-matriz")
).map((fila, indice) => {
    const aspecto =
        fila.querySelector(".riesgo-aspecto")?.value.trim() || "Sin aspecto indicado";

    const nivel =
        fila.querySelector(".riesgo-nivel")?.value || "MEDIO";

    const titulo =
        fila.querySelector(".riesgo-titulo")?.value.trim() || "Riesgo sin título";

    const descripcion =
        fila.querySelector(".riesgo-descripcion")?.value.trim() || "Sin descripción";

    const accion =
        fila.querySelector(".riesgo-accion")?.value.trim() || "Sin acción correctiva indicada";


            const numeroRiesgo =
        String(indice + 1).padStart(2, "0");

    return [
        numeroRiesgo + ". " + aspecto,

        titulo + "\n\n" + descripcion,

        nivel + "\n\n" +
        numeroRiesgo + ". " + titulo +
        "\n\n" + descripcion,

        accion
    ];
}),

        styles: {
            font: "times",
            fontSize: 7,
            cellPadding: 2,
            overflow: "linebreak",
            valign: "top",
            lineColor: [0, 0, 0],
            lineWidth: 0.2,
            textColor: [40, 50, 65]
        },
        headStyles: {
            fillColor: [199, 216, 238],
            textColor: [40, 50, 65],
            fontStyle: "bold",
            halign: "center"
        },
        columnStyles: {
            0: { cellWidth: 35, fontStyle: "bold" },
            1: { cellWidth: 36 },
            2: { cellWidth: 57 },
            3: { cellWidth: 52 }
        },
        rowPageBreak: "avoid"
    });

    yFinal = pdf.lastAutoTable.finalY + 7;

    const textoGarantia =
        "*INFRASOL no asume garantía por daños/cortocircuitos causados por agua o humedad de equipos externos, ni por apagados térmicos o pérdida de autonomía de baterías.*";

    pdf.setFont("times", "italic");
    pdf.setFontSize(8);
    pdf.setTextColor(0, 0, 0);

    const lineasGarantia = pdf.splitTextToSize(textoGarantia, 180);

    if (yFinal + (lineasGarantia.length * 4) > 280) {
        pdf.addPage();
        yFinal = 25;
    }

    pdf.text(lineasGarantia, 15, yFinal);
    yFinal += (lineasGarantia.length * 4) + 8;

    // VIII. REGISTRO FOTOGRÁFICO DESPUÉS DE VII. MATRIZ
    await dibujarRegistroFotografico();



    const estadoSeleccionado =
    equipoActual.querySelector(
    'input[type="radio"]:checked'
    )?.value || "";
    const responsableNombre =
    equipoActual.querySelector(
        '.tabla-responsable input[type="text"]'
    )?.value || "";

    const responsableCorreo =
    equipoActual.querySelector(
        '.tabla-responsable input[type="email"]'
    )?.value || "";

    const responsableCargo =
    equipoActual.querySelectorAll(
        '.tabla-responsable input[type="text"]'
    )[1]?.value || "";

    let yEstado =
    yFinal + 20;

    pdf.setFont(
        "times",
        "bold"
    );

    pdf.setFontSize(11);


    // =========================
    // ENCABEZADO EN TODAS LAS HOJAS
    // =========================

    const totalPaginas = pdf.getNumberOfPages();

    for(let pagina = 1; pagina <= totalPaginas; pagina++){

        pdf.setPage(pagina);

        dibujarEncabezado(pdf);

    }
    
const localArchivo = (local || "SIN-LOCAL")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "_");

const fechaArchivo = fecha || "SIN-FECHA";

const nombreArchivo =
    `INSTALACIÓN_${localArchivo}_${fechaArchivo}.pdf`;

pdf.save(nombreArchivo);
    }

    contador += equipos.length;

    localStorage.setItem(
        "contadorMantenimientoUPS",
        contador
    );

    actualizarCodigo();

        }
        
