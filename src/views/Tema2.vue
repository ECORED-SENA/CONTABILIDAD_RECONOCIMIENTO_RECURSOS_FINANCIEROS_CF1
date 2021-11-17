<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Hechos económicos
    
    .row.justify-content-center.mb-4
      .col-lg-6
        p.mb-4 Los hechos económicos en una empresa, desde el punto de vista contable, se pueden definir como cualquier actividad u operación que se realice en la empresa en desarrollo de su actividad o su sostenimiento, como, por ejemplo: compras de materias primas, insumos o suministros, ventas de productos, un crédito recibido, el pago de un abono a deuda, etc.
      .col-lg-6
        h4.mb-4 Los hechos económicos tienen efectos financieros, pues buscan, bien sea obtener recursos para la empresa, o gastar recursos de la empresa, y la contabilidad registrará tanto los ingresos de los recursos como las reducciones o salidas de dichos recursos.

    .row.justify-content-center.mb-4
      .col-lg-1
      .col-lg-4.col-sm-6
        figure.mb-4
          img(src='@/assets/curso/tema2/img01.svg')
      .col-lg-1
      .col-lg-6
        p.mb-4 La labor contable inicia con que cada uno de los hechos económicos u operaciones deberán ser identificados y clasificados, para pasar luego a registrarlos en la contabilidad en los libros de diario, mayor, etc. Esta parte es sustantivamente importante, se tiene que tener en cuenta si la operación que se realizó afecta parte de los activos, de los pasivos o del patrimonio, determinando si representan entradas o salidas de recursos, es decir, si son ingresos o gastos; razón por la cual es de vital importancia conocer la definición y las características para su reconocimiento, y que tengan los respectivos soportes que comprueben el hecho. De igual forma, se tienen en cuenta las bases de medición, las cuales se encuentran registradas en las políticas contables que fueron diseñadas de acuerdo con las directrices señaladas en la NIC 8 (IFRS Foundation, 2018).
    
    p.mb-5 Hacer la clasificación de los hechos económicos es una de las tareas más complejas para un principiante en contabilidad, ya que se verá expuesto a dudas. Por ejemplo, en una compra hay que identificar en qué rubro se ha de clasificar dicha compra, ¿será un activo fijo, un activo movible, un activo, un costo o un gasto? Se presentan frecuentemente confusiones entre cuentas de pasivo con un gasto o de activo con patrimonio. Por tanto, es muy relevante hacer un análisis de los conceptos y naturaleza del hecho económico, para que se pueda determinar su clasificación, y posteriormente sí realizar el registro en la contabilidad. Cabe señalar que errores en la contabilización de los hechos económicos de la empresa u organización por no saber hacer esta clasificación representan información no fiable, que no sirve para la toma de decisiones, por lo cual se deberán generar los ajustes contables pertinentes, con el fin de corregir y poder contar con información fiable, objetiva, que exprese lo sucedido, para poder tomar decisiones. De acuerdo con esto, se encuentran las siguientes clasificaciones:
    
    h3 A. Clasificación por tipos de hechos económicos
    p.mb-4 Desde el punto de vista contable, existen varios tipos o formas de clasificar los hechos económicos de una empresa; en este caso, para efectos del presente curso, se abordará la que más favorece el ejercicio de iniciación en contabilidad:
    p.mb-5 Una vez se ha realizado el análisis del hecho en sí y la clasificación de las transacciones realizadas en la empresa, se realizan los asientos o registros contables, los cuales se pueden clasificar de la siguiente manera, de acuerdo con Warren et al. (2016); Santos-Cid (2018); Vilches (2019); y Angulo (2018): 

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Asiento simple")
        .row.justify-content-center
          .col-lg-10
            p.mb-4 Es cuando intervienen dos cuentas, una que se registra en el debe y la otra en el haber, dependiendo del tipo de operación y el elemento de los estados financieros que se haya clasificado. 
            p.mb-5 Ejemplo: en una empresa que vende parte en efectivo, se realiza una consignación bancaria por las ventas realizadas. Para este este caso, se utilizan dos cuentas del activo: Caja y Bancos. Se debita la cuenta Bancos, donde se registra el aumento, y, en la cuenta Caja o Efectivo disponible, se acredita el mismo valor, registrando la disminución en el haber, tal como se relaciona a continuación:
        .row.justify-content-center
          .col-lg-8
            div.BorTit1.mb-3
              p.mb-0 <b>Tabla 5</b>
              i.mb-0 Asiento simple
            .tabla-a.color-acento-botones.mb-5
              table
                thead
                  tr
                    th Cuenta
                    th Debe
                    th Haber
                tbody
                  tr
                    td Bancos
                    td.text-end $1.000.000        
                    td.text-end
                  tr
                    td Caja
                    td.text-end          
                    td.text-end $1.000.000
                  tr
                    td Total
                    td.text-end $1.000.000
                    td.text-end $1.000.000

            p.mb-0 De acuerdo con la tabla anterior, se puede ver que en el débito y en el crédito se registra el mismo valor, y se presenta una igualdad en la transacción; es decir, débitos y créditos son idénticos, lo que es denominado principio de partida doble.

      .py-3.py-md-4(titulo="Asiento compuesto")
        .row.justify-content-center
          .col-lg-10
            p.mb-4 Es la operación o hecho económico que ocurre en la empresa donde intervienen más de dos cuentas contables. Regularmente, sucede cuando se registran compras o ventas de productos, donde hay que relacionar otros ítems, como el impuesto sobre las ventas (IVA), las retenciones en la fuente por ventas, servicios, etc., las retenciones sobre el Impuesto de Industria y Comercio (ICA), entre otros.
            p.mb-5 Ejemplo: en una empresa, se realiza una venta por valor de $10.000.000, a crédito, sujeta a impuesto de IVA del 19 %, tal cual lo dicta la ley para el producto vendido.  Analizando este hecho económico, se puede evidenciar que en la operación intervienen tres cuentas contables: 1) La de ventas o ingresos por actividades ordinarias (crédito), correspondiente a los ingresos que provocarán la venta, 2) la cuenta de IVA generado y por pagar (débito), de los pasivos, ya que es dinero que la empresa le debe ahora al gobierno por esa venta; y 3) la cuenta de clientes o cuentas por cobrar (crédito), la cual obedece al activo. De acuerdo con la naturaleza de cada una de las cuentas, se presentará un aumento o disminución; asimismo, se deberá registrar la operación de venta mediante el registro contable, tal como se observa a continuación:
        .row.justify-content-center
          .col-lg-8
            div.BorTit1.mb-3
              p.mb-0 <b>Tabla 6</b>
              i.mb-0 Asiento compuesto
            .tabla-a.color-acento-botones.mb-5
              table
                thead
                  tr
                    th(colspan=2) Cuenta
                    th Debe
                    th Haber
                tbody
                  tr
                    td(colspan=2)  Clientes – CxC
                    td.text-end $11.900.000                   
                    td.text-end
                  tr
                    td(colspan=2)  IVA generado
                    td.text-end          
                    td.text-end $1.900.000
                  tr
                    td(colspan=2)  Ingresos por ventas actividades ordinarias
                    td.text-end          
                    td.text-end $10.000.000
                  tr
                    td(colspan=2)  Total
                    td.text-end $11.900.000          
                    td.text-end $11.900.000

            p Es de resaltar que, en el registro del asiento compuesto, se aplica igualmente el principio de la partida doble, ya que se registra el ingreso por el valor monetario de la venta ($10.000.000) y después se calcula el valor del IVA señalado, a la tarifa del 19 %, el cual da como resultado $1.900.000. Por último, se registra el valor de la factura que deberá pagar el comprador, en la cuenta contable del activo corriente clientes o cuentas por cobrar CxC. El cliente pagará el valor total, que es la suma del valor facturado por el producto o servicio, y que será un ingreso para la empresa, y el IVA de dicha venta, que será un pasivo al gobierno; por ende, se deben incrementar estos dos valores en la cuenta por cobrar, y se registra entonces un valor total de $11.900.000.
      
    h3 B. Cuenta: concepto y clasificación
    p.mb-4 En los ítems anteriores se detallaron los conceptos sobre los hechos económicos, su clasificación y la forma de registrar una transacción o hecho contable en conformidad con la clasificación de los mismos. En complemento, es necesario ampliar la definición de los conceptos de <span style="color: #E85F5B">cuentas contables y su clasificación</span>, de acuerdo con la normatividad.
    p.mb-4 Las cuentas son agrupaciones que reflejan el récord de movimientos y estado actual de los diferentes recursos, tanto de los activos como del pasivo total y del patrimonio neto, y que, a su vez, se pueden subdividir de acuerdo con las especificidades y detalles de los mismos. A través de estas agrupaciones, las cuentas clasifican y registran las operaciones y transacciones contables y todos los detalles de los hechos económicos en que incurre la empresa. También se puede decir que son el nombre bajo el cual se registran ordenada y cronológicamente las diferentes transacciones en una empresa. Es obligatorio que estas transacciones se registren con la fecha de su suceso o momento de ocurrencia, lo que hace la obtención de información contable fiable y oportuna. (Warren et al., 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018).
    p.mb-5 Toda cuenta contable que aplique a la contabilidad de la empresa u organización, según su objeto social, se compone por los siguientes elementos:
    
    .row.justify-content-center.mb-4
      .col-lg-4.d-flex
        div.border-radius-10.p-4.py-5.mb-4(style="background-color: #FCFBED !important")
          .row.mb-2
            .col-3
              figure
                img(src='@/assets/curso/tema2/img02.svg')
          h3.mb-1 Nombre de la cuenta
          p.mb-0 Su denominación obedece a lo establecido y debe registrarse de forma completa.
      .col-lg-4.d-flex
        div.border-radius-10.p-4.py-5.mb-4(style="background-color: #FCC14A !important")
          .row.mb-2
            .col-3
              figure
                img(src='@/assets/curso/tema2/img03.svg')
          h3.mb-1 El debe
          p.mb-0 Se ubica en el lado izquierdo, inmediatamente después del nombre, para indicar los débitos de las transacciones o hechos económicos.
      .col-lg-4.d-flex
        div.border-radius-10.p-4.py-5.mb-4(style="background-color: #FCFBED !important")
          .row.mb-2
            .col-3
              figure
                img(src='@/assets/curso/tema2/img04.svg')
          h3.mb-1 El haber
          p.mb-0 Se ubica en la parte derecha de la columna del debe, para registrar los créditos de la operación o hecho económico.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        div.BorTit1.mb-3
          p.mb-0 <b>Tabla 7</b>
          i.mb-0 Ubicación de los elementos de una cuenta
        .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th Cuenta
                    th Debe
                    th Haber
                tbody
                  tr
                    td Nombre de la cuenta
                    td.text-center Valor debitado                  
                    td.text-end
                  tr
                    td Nombre de la cuenta
                    td.text-end                   
                    td.text-center Valor acreditado

    p.mb-4 Al registrar las operaciones o hechos económicos en el libro diario, se puede proceder a determinar el saldo de las cuentas de acuerdo con las necesidades de información. En caso de que la empresa posea y maneje algún tipo de software aplicativo contable, se pueden obtener los detalles auxiliares de cada cuenta para su análisis o consulta (Warren et al, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018). 
    p.mb-5 Para calcular el saldo de la cuenta, se tienen que restar los valores monetarios que se encuentran registrados en el debe y en el haber. Por ejemplo, en una empresa, es frecuente saber cuál es el saldo de dinero efectivo, el cual está registrado en la cuenta de caja, luego, lo que hay que hacer es revisar todos los registros débitos y los registros créditos realizados a la fecha; posteriormente, se calcula la diferencia entre estos dos valores y el resultado de esa resta será el saldo de efectivo o de la cuenta caja, el cual debe coincidir con el recurso material de dinero físico; por ser del activo, su naturaleza es débito, esto significa que el saldo en caja no puede ser negativo, el dinero disponible está físicamente o no hay existencia de dinero.
    
    h3 C. Clasificación de las cuentas
    p.mb-5 Las cuentas contables, de acuerdo con su naturaleza de activo o de pasivo, se clasifican en cuentas de balance o cuentas reales, y en cuentas de resultado o cuentas nominales (Warren et al., 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018; CTCP, 2010):
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Cuentas reales o de balance")
        .col-lg-10
          p.mb-5 Son el conjunto de cuentas que compilan y definen el Estado de Situación Financiera de la empresa u organización, y se denominan y clasifican básicamente como cuentas de activo, pasivo total, y de patrimonio neto. 
          div.BorTit1.mb-3
            p.mb-0 <b>Tabla 8</b>
            i.mb-0 Comportamiento de las cuentas de balance
          .tabla-a.color-acento-botones(style="background-color: white")
                table
                  thead
                    tr
                      th(colspan=3) Activo
                      th(colspan=3) Pasivo                      
                  tbody
                    tr
                      td.text-center Cuenta
                      td.text-center Débito            
                      td.text-center Crédito
                      td.text-center Cuenta
                      td.text-center Débito            
                      td.text-center Crédito
                    tr
                      td(style="vertical-align: top") Nombre de la cuenta o recurso controlado por la entidad que se genera a partir de eventos pasados y del cual se espera recibir beneficios económicos.
                      td(style="vertical-align: top")
                        p.mb-4 Inician y aumentan en el débito.
                        p.mb-0 Su saldo es débito. Por ser recursos que posee la empresa, no son negativos.            
                      td(style="vertical-align: top") Disminuyen y se cancelan en el crédito.
                      td(style="vertical-align: top") Nombre de la cuenta u obligación presente de la entidad, se genera igualmente de eventos pasados, financian los recursos del activo.
                      td(style="vertical-align: top") Disminuyen y se cancelan en el débito.
                      td(style="vertical-align: top") 
                        p.mb-1 Inician y aumentan en el crédito.
                        p.mb-0 Su saldo es crédito.
      .row.justify-content-center(titulo="Cuentas de resultado o nominales")
        .col-lg-10
          p.mb-5 Son el conjunto de cuentas que definen el estado de resultados y son las cuentas que determinan la utilidad o pérdida del ejercicio operativo de la empresa u organización, lo que se determina al finalizar el periodo contable. En este grupo de cuentas de resultado, se compilan las cuentas que albergan los ingresos, los gastos y costos de venta o gastos producción, de acuerdo con el tipo de empresa y en conformidad con las normas locales en Colombia. Es de aclarar que en el ámbito de las normas internacionales contables no se configura la clasificación de costos, sino que son parte de los gastos en que incurre la empresa para una finalidad específica, por ejemplo, gastos de producción o servicio. Sin embargo, es un concepto muy establecido en Colombia y la región, que hace que, al presentar la contabilidad en ámbitos internacionales o de acuerdo con las normas internacionales, haya que traducir.
          div.BorTit1.mb-3
            p.mb-0 <b>Tabla 9</b>
            i.mb-0 Comportamiento de las cuentas de resultado
          .tabla-a.color-acento-botones.mb-5(style="background-color: white")
                table
                  thead
                    tr
                      th(colspan=3) Cuentas de resultado
                      th Debe                      
                      th Haber                      
                  tbody
                    tr
                      td Ingresos
                      td(colspan=2)
                        p.mb-1 Nombre de la cuenta.
                        p.mb-1 Representan los aumentos de los recursos y generan beneficios monetarios o económicos.
                        p.mb-0 Su aumento afecta el patrimonio neto vía utilidades.            
                      td Se reducen o disminuyen; su cancelación se hace en el deber o débito.
                      td 
                        p.mb-1 Inician y crecen en el haber o crédito.
                        p.mb-0 Su saldo es de naturaleza crédito.
                    tr
                      td Gastos
                      td(colspan=2)
                        p.mb-1 Nombre de la cuenta.
                        p.mb-0 Registran las disminuciones de las utilidades o beneficios económicos. Tienen un efecto de disminución en el patrimonio neto.
                      td Se registran, inician y aumentan en el débito.
                      td 
                        p.mb-1 Disminuyen y se cancelan en el crédito. 
                        p.mb-0 Su saldo es de naturaleza débito.
                    tr
                      td Costos
                      td(colspan=2)
                        p.mb-1 Son gastos que representan inversión para realizar o para adquirir el producto que se desea ofertar o que se fabrica, lo que depende del objeto social de la empresa. Se clasifican en costos de ventas y costos de producción.
                      td 
                        p.mb-1 Inician y aumentan en el débito 
                        p.mb-0 Su saldo es de naturaleza débito.
                      td Disminuyen y se cancelan en el crédito.
                        
          p.mb-5 Como resumen del movimiento y naturaleza de las cuentas contables, la siguiente tabla indica su comportamiento de cómo aumentan y cómo disminuyen:          
          .row.justify-content-center
            .col-lg-7
              div.BorTit1.mb-3
                p.mb-0 <b>Tabla 10</b>
                i.mb-0 Resumen de comportamiento de las cuentas contables
              .tabla-a.color-acento-botones.mb-5(style="background-color: white")
                table
                  thead
                    tr
                      th Clases de cuentas
                      th Aumento                      
                      th Disminuye                      
                  tbody
                    tr
                      td.text-center Activo
                      td.text-center Débito                       
                      td.text-center Crédito
                    tr
                      td.text-center Pasivo
                      td.text-center Crédito                       
                      td.text-center Débito
                    tr
                      td.text-center Patrimonio neto
                      td.text-center Crédito                       
                      td.text-center Débito
                    tr
                      td.text-center Ingresos
                      td.text-center Crédito                       
                      td.text-center Débito
                    tr
                      td.text-center Gastos
                      td.text-center Débito                       
                      td.text-center Crédito
                    tr
                      td.text-center Costos
                      td.text-center Débito                       
                      td.text-center Crédito

          p.mb-4 Con el objeto de registrar las transacciones realizadas por las empresas y dar claridad y confiabilidad en dichos registros, se crea el Plan Único de Cuentas -PUC-. Por este motivo, en Colombia, existen 19 PUC, entre ellos, se encuentra el decreto 2650 de 1993, que es utilizado para comerciantes.
          p.mb-4 En Colombia, la política contable creó el Plan Único de Cuentas (Decreto 2650 de 1993), el cual brinda lineamientos de orden y registro para la confiabilidad y oportunidad de la información contable en las empresas con mérito comercial; es un catálogo que dicta las directrices generales de la contabilidad para ese tipo de empresas. Sin embargo, existen otros planes de cuentas, como el de la salud y de otros tipos especiales, los cuales son muy utilizados, a pesar de que, en coherencia con las normas internacionales, no se utiliza el Plan Único de Cuentas. Son muy similares, pero siempre existen diferencias. El PUC ha sido objeto de ajustes y modificaciones de acuerdo con las necesidades de las empresas y el surgimiento de nuevos recursos y alternativas de servicios, lo que es una constante en el tiempo; en algunos casos, se han realizado incorporaciones o eliminaciones de cuentas. También se cambian denominaciones de cuentas y códigos, con el fin de generar estados financieros que cumplan y se acerquen a los estándares establecidos internacionalmente.
          p.mb-5 En concordancia, puede revisar qué es la política contable y la implementación de diferentes criterios:                    
          figure
            .video
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/NhsdLCBUev4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
      .row.justify-content-center(titulo="Catálogo de cuentas")
        .col-lg-10
          p.mb-5 En el catálogo de cuentas, se encuentran los detalles nominales y descriptivos de los grupos de cuentas y sus subdivisiones, es decir, las cuentas con sus respectivos desagregados por niveles; por ejemplo, de la cuenta del activo disponible:
          .row.justify-content-center.mb-5
            .col-lg-10
              div.BorTit1.mb-3
                p.mb-0 <b>Tabla 11</b>
                i.mb-0 Ejemplo desagregado de cuentas
              .tabla-a.color-acento-botones(style="background-color: white")
                table
                  thead
                    tr
                      th Clase
                      th El primer dígito                      
                      th 1 Activo                      
                  tbody
                    tr
                      td Grupo
                      td Los dos primeros dígitos.
                      td 11 Disponible.
                    tr
                      td Cuenta
                      td Los cuatro primeros dígitos.
                      td 1110 Bancos.
                    tr
                      td Subcuenta
                      td Los seis primeros dígitos.
                      td 111005 Bancos nacionales.
                    tr
                      td Auxiliares
                      td Con siete o más dígitos.
                      td 11100501 Banco BBVA.
          p.mb-5 Las clases de cuentas contables que se encuentran en el PUC se detallan en el primer dígito de la cuenta, a partir de allí, se subdivide, como se mostró en la tabla anterior.
          .row.justify-content-center.mb-5
            .col-lg-6
              div.BorTit1.mb-3
                p.mb-0 <b>Tabla 12</b>
                i.mb-0 Clasificación del catálogo contable por tipos o clases de cuenta
              .tabla-a.color-acento-botones(style="background-color: white")
                table
                  thead
                    tr
                      th(colspan=2) Clase                                     
                  tbody
                    tr
                      td Clase 1
                      td Activo.
                    tr
                      td Clase 2
                      td Pasivo.
                    tr
                      td Clase 3
                      td Patrimonio.
                    tr
                      td Clase 4
                      td Ingresos.
                    tr
                      td Clase 5
                      td Gastos.
                    tr
                      td Clase 6
                      td Costos de ventas.
                    tr
                      td Clase 7
                      td Costos de producción.     

    h3 D. Impuestos   
    p.mb-4 El desarrollo de actividades empresariales implica, desde la instancia formal como empresa, que contablemente existe responsabilidad de cumplir con obligaciones tributarias establecidas por ley, las cuales hay que afrontar en la medida en que los hechos económicos lo contemplan y por el beneficio que representa para la empresa su actividad; es la contribución social que aportan las empresas. 
    p.mb-4 Cada periodo determinado o en el año de ejercicio, las personas naturales y jurídicas deben declarar y pagar sus impuestos ante la Dirección de Impuestos Nacionales -DIAN, como lo establece la ley. Todos, sin falta, deben ser responsables de pagar estos tributos y así evitar ser sancionados y multados.
    p.mb-5 Entre los principales impuestos que se deben pagar a la Dian, se encuentran:         
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Impuesto al Valor Agregado - IVA")
        .col-lg-10
          p.mb-4 El IVA es el tributo de carácter nacional que grava la venta de bienes, productos y servicios, así como las importaciones, la venta y operación de juegos de azar. Cabe mencionar que todas las empresas están obligadas a ser responsables del IVA, mientras que, en las personas naturales, la responsabilidad del IVA depende de que su facturación en el año inmediatamente anterior, o el nivel de consignaciones bancarias, haya sido superior a 3.500 UVT ($127.078.000).
          p.mb-4 Su cálculo parte de una tarifa general, la cual actualmente es del 19% para la mayoría de los bienes y servicios. Sin embargo, existen tarifas diferenciales para ciertos productos. La tarifa del impuesto establece que toda empresa que venda bienes o servicios debe calcular un valor del 19% adicional al valor del producto de producción, incluida su ganancia, por concepto de este impuesto denominado IVA. Esto significa que, en la factura, la empresa, una vez totalice los valores del producto vendido al cliente, le sumará el valor correspondiente al IVA, calculando el valor total y final a pagar por parte del cliente. Este último valor es un cargo al pasivo, pues es una obligación ante el estado y no hace parte de los recursos de la empresa (IVA por pagar).
          p.mb-5 Las empresas declarantes del IVA tienen dos periodos para pagar este impuesto recaudado, tal cual lo establece el Artículo 600 del Estatuto Tributario, uno bimestral y otro cuatrimestral:
          .row.justify-content-center.mb-4
            .col-lg-5.d-flex.t2-div11.p-4.py-5.mb-4
              div 
                .row.justify-content-start.mb-5
                  .col-lg-3.col-md-2.col-sm-3.col-3
                    img.w-75(src="@/assets/curso/tema2/img06.svg")
                p.mb-1 <b>Bimestral</b>
                p.mb-0 Las empresas o personas naturales con ingresos brutos al 31 de diciembre del año gravable anterior, o en lo corrido del año, iguales o superiores a 92 Unidades de Valor Tributario ($3.340336). Estas UVT son lotes monetarios que cada año se declaran y actualizan por el gobierno ($36.308 pesos para 2021).
            .col-lg-5.d-flex.t2-div12.p-4.py-5.mb-4
              div 
                .row.justify-content-start.mb-5
                  .col-lg-3.col-md-2.col-sm-3.col-3
                    img.w-75(src="@/assets/curso/tema2/img07.svg")
                p.mb-1 <b>Cuatrimestral</b>
                p.mb-0 Las empresas o personas naturales con ingresos, el año anterior, menores a 92 UVT ($3.340336 para el 2019).

          p.mb-5 Ahora la declaración, en ambos casos, se debe realizar de conformidad con el calendario establecido.
          .row.justify-content-center.mb-5
            .col-lg-9
              div.BorTit1.mb-3
                p.mb-0 <b>Tabla 13</b>
                i.mb-0 Ejemplo cálculo de IVA sobre ventas en factura a cliente
              .tabla-a.color-acento-botones(style="background-color: white")
                table
                  thead
                    tr
                      th Cantidad                                     
                      th Descripción                                     
                      th Precio/und
                      th Total
                  tbody
                    tr
                      td 15
                      td Producto A
                      td $ 18.000 
                      td $ 270.000 
                    tr
                      td 10
                      td Producto B
                      td $ 12.000 
                      td $ 120.000
                    tr
                      td 20
                      td Producto C
                      td $ 35.000 
                      td $ 700.000
                    tr
                      td 
                      td 
                      td $ -
                      td $ -
                    tr
                      td 
                      td 
                      td SUBTOTAL 
                      td $ 1.090.000 
                    tr
                      td 
                      td 
                      td IVA (19%) 
                      td $ 207.100
                    tr
                      td 
                      td 
                      td TOTAL 
                      td $ 1.297.100 

          .row.justify-content-center.mb-5
            .col-lg-9
              div.BorTit1.mb-3
                p.mb-0 <b>Tabla 14</b>
                i.mb-0 Registro de IVA por ventas
              .tabla-a.color-acento-botones(style="background-color: white")
                table
                  thead
                    tr
                      th Cuenta                                     
                      th Debe                                     
                      th Haber                     
                  tbody
                    tr
                      td Clientes – CxC
                      td $ 1.297.100
                      td 
                    tr
                      td IVA generado
                      td 
                      td $ 207.000
                    tr
                      td Ingresos por ventas actividades ordinarias
                      td 
                      td $1.297.100
                    tr
                      td Total
                      td $ 1.297.100
                      td $$ 1.297.100

          .row.justify-content-center
            .col-lg-11
              a.anexo.mb-4(href="https://www.youtube.com/watch?app=desktop&v=a_FHEKYZkxw" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto            
                  p <b>Enlace web.</b> Para efectos de ampliar los conocimientos sobre los requisitos que deben tener las personas naturales para ser o no responsables del IVA y, por ende, de facturar, puede consultar el siguiente video sobre responsables y no responsables del IVA, a través del siguiente enlace.
      .row.justify-content-center(titulo="Retención en la fuente")
        .col-lg-10
          p.mb-4 Es un ejercicio establecido por la normatividad en el Estatuto Tributario, no es propiamente un tributo, <span style="color:#E85F5B"><b>es un mecanismo de recaudo anticipado de los impuestos de renta</b></span> que deberán pagar las empresas sobre las utilidades esperadas. 
          p.mb-5 Las retenciones se manejan en dos clases:
          .row.justify-content-center.mb-4.px-4
            .col-lg-5.d-flex.t2-div13.p-4.py-5.mb-4
              div 
                .row.justify-content-center.mb-5
                  .col-lg-4.col-md-2.col-sm-3.col-3
                    img(src="@/assets/curso/tema2/img08.svg")
                p.mb-1.texto-blanco <b>Retenciones activas</b>
                p.mb-0.texto-blanco Toda persona jurídica, previo ciertos requisitos, cada vez que paga, está obligada a realizar una retención en la fuente al acreedor o beneficiario del pago. El valor recaudado debe ser declarado, en formulario o electrónicamente, y pagado ante la Dirección de impuestos y aduanas DIAN, de forma mensual, en las fechas establecidas y fijadas en el calendario tributario.
            .col-lg-5.d-flex.t2-div14.p-4.py-5.mb-4
              div 
                .row.justify-content-center.mb-5
                  .col-lg-4.col-md-2.col-sm-3.col-3
                    img(src="@/assets/curso/tema2/img09.svg")
                p.mb-1 <b>Retenciones pasivas</b>
                p.mb-0 Suceden cuando la empresa vende bienes o servicios, entonces el cliente deberá realizar una retención en la fuente por el motivo que fuere pertinente; esto hace que toda empresa deba tener en cuenta la actividad, para saber si debe realizar pagos de retención anticipadamente, es decir, si sus clientes le descontarán por esas actividades, restando del valor a pagar al momento de la factura y donde le entregará un certificado que evidencie que le retuvieron dichos montos.
          
          p.mb-5 Para determinar en qué casos y cuáles son las tarifas o porcentajes de retención en la fuente, se sugiere consultar a través de la web las tablas de retención en la fuente. Con el apoyo e indicaciones, puede identificar los hechos económicos que serán sujetos de retención en la fuente y, en conformidad con el año en vigencia, se determinen, de acuerdo con el concepto, la tarifa a retener y la forma de contabilizarla.
          
          .row.justify-content-center
            .col-lg-11
              a.anexo.mb-4(href="https://www.gerencie.com/tabla-de-retencion-en-la-fuente-2021.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto            
                  p <b>Enlace web.</b> Tabla de retención en la fuente año 2021 | Gerencie.com. (2020).
      .row.justify-content-center(titulo="Gravamen a los Movimientos Financieros - GMFA")
        .col-lg-10
          p.mb-0 Es el impuesto que se conoce comúnmente como el 4 por 1.000, que cobra, por parte de las entidades financieras bancarias, por las transacciones de dinero que se hacen desde cuentas de ahorro y cuentas corrientes. Fue creado con el fin de solventar las crisis económicas de sectores económicos o necesidades del Estado. Se calcula tomando como base el valor de la transacción en dinero y multiplicar por 0.004, el resultado será el valor tributado por la empresa al realizar cada transacción. Como se indicó, el recaudo del impuesto lo realizan las entidades bancarias, quienes luego deben transferir los recaudos al gobierno. Para las empresas, esto representa un gasto financiero y es un menor valor del activo, por lo tanto, se debe registrar con naturaleza crédito.
      .row.justify-content-center(titulo="Impuesto de Industria y Comercio - ICA")
        .col-lg-10
          p.mb-4 Es el impuesto reglamentado desde la Ley 14 de 1983, el Decreto 1333 de 1986 y lo dispuesto en la Ley 1819 de 2016; además, <span style="color: #E85F5B">está regulado desde cada municipio y su sistema tributario, es decir, es un tributo que se aplica a nivel nacional</span>, pero su pago se realiza a los municipios donde se desarrolla la actividad económica de la empresa o por parte de la persona natural. Se genera por el desarrollo de cualquier actividad comercial, de servicios o de carácter industrial en la jurisdicción del municipio, no donde se presta, sino donde opera o tiene domicilio quien oferta. 
          p.mb-5 Se debe identificar la base mínima, la cual corresponde a definir cuál es el valor a partir del cual se puede hacer la retención del ICA en cada municipio. Bogotá, para 2021, estableció una base mínima por servicios para pago de ICA de $145.000 (4 UVT), y para el caso de compras, este valor asciende a $980.000 (27 UVT). Por lo anterior, es necesario establecer los montos por los que las actividades están sujetas al pago de ICA, asimismo, definir desde qué valores se debe aplicar por ingresos en cada municipio, para así proceder al pago de este impuesto.
          div.BorTit1.mb-3
            p.mb-0 <b>Tabla 15</b>
            i.mb-0 Tarifa para cálculo de retención en el ICA según actividad
          .tabla-a.color-acento-botones.mb-5
            table
              thead
                tr
                  th(colspan=2).text-center Tipo de actividad                                     
                  th(colspan=6) Actividad                                    
                  th Tarifa por mil                                     
              tbody
                tr
                  td(colspan=2 rowspan=4) Actividades industriales
                  td(colspan=6) Producción de alimentos, excepto bebidas; producción de calzado y prendas de vestir.
                  td.text-center 4,14
                tr                  
                  td(colspan=6) Fabricación de productos primarios de hierro y acero; fabricación de material de transporte.
                  td.text-center 6,9
                tr                  
                  td(colspan=6) Edición de libros.
                  td.text-center 8
                tr                  
                  td(colspan=6) Demás actividades industriales.
                  td.text-center 11,4
                tr
                  td(colspan=2 rowspan=4) Actividades comerciales
                  td(colspan=6) Venta de alimentos y productos agrícolas en bruto; venta de textos escolares y libros (incluye cuadernos escolares); venta de drogas y medicamentos.
                  td.text-center 4,14
                tr                  
                  td(colspan=6) Venta de maderas y materiales para construcción; venta de automotores (incluidas motocicletas).
                  td.text-center 6,9
                tr                  
                  td(colspan=6) Venta de cigarrillos y licores; venta de combustibles derivados del petróleo y venta de joyas.
                  td.text-center 13,8
                tr                  
                  td(colspan=6) Demás actividades comerciales.
                  td.text-center 11,04

                tr
                  td(colspan=2 rowspan=5) Actividades de servicios
                  td(colspan=6) Transporte, publicación de revistas, libros y periódicos, radiodifusión y programación de televisión.
                  td.text-center 4,14
                tr
                  td(colspan=6) Consultoría profesional; servicios prestados por contratistas de construcción, constructores y urbanizadores; presentación de películas en salas de cine.
                  td.text-center 6,9
                tr
                  td(colspan=6) Servicio de restaurante, cafetería, grill, discoteca y similares; servicios de hotel, motel, hospedaje, amoblado y similares; servicio de casas de empeño y servicios de vigilancia.
                  td.text-center 13,8
                tr
                  td(colspan=6) Servicios de educación prestados por establecimientos privados en los niveles de educación inicial, preescolar, básica primaria, básica secundaria y media.
                  td.text-center 7
                tr
                  td(colspan=6) Demás actividades de servicios.
                  td.text-center 9,66

                tr
                  td(colspan=2) Actividades financieras
                  td(colspan=6) Actividades financieras.
                  td.text-center 11,04

          .row.justify-content-center.mb-5(titulo="Impuesto de Industria y Comercio - ICA")
            .col-lg-10
              .cajon.color-acento-contenido.p-5
                div.px-4
                  h4 Ejemplo
                  p.mb-4 Como ejemplo, se puede suponer que una empresa industrial del sector de Cota, municipio muy cercano a Bogotá, vende productos a otra empresa compradora en Bogotá, por un valor total de mercancías de $5.000.000. Calcular el valor de Reteica por parte de la empresa en Bogotá, que fue donde se realizó la transacción.
                  p.mb-4 Como se mencionó anteriormente, en 2021 en Bogotá, desde la SDH, se estableció que la base mínima es de $980.000 por compras, luego, hay que practicar el Reteica por el hecho de la compra por parte de la empresa en Bogotá, así:
                  h4.mb-0 (Valor bruto de la compra de mercancías X tarifa por mil de Reteica) ÷ 1000
                  h4.mb-0 ($5.000.000 X 11.04) ÷ 1000 = $55.200 
          p.mb-4 Para legalizar la retención del ICA, la empresa retenedora debe diligenciar el formulario para declarar ICA de cada municipio, bien sea físico o electrónico (incluyendo el comprobante de egreso y adjuntar el asiento contable, de ser necesario), con el formulario del periodo liquidado junto con las demás retenciones realizadas.
          p.mb-0 La empresa retenedora deberá enviar el certificado de retención al sujeto que le fue aplicada la retención, donde evidencie y deje constancia del monto y tipo de Reteica que se aplicó (según la actividad). Con ese certificado, el vendedor puede declararlo y por ende deducirlo cuando vaya a hacer su propia declaración y su pago del ICA.
      .row.justify-content-center(titulo="Impuesto de renta")
        .col-lg-10
          p.mb-0 Es el impuesto anual que deben pagar las empresas sobre las utilidades generadas en el periodo anterior de ejercicio, en su cálculo se deben descontar los pagos realizados como anticipo por concepto de retención en la fuente, su pago se podrá realizar por medio de formularios en físico avalados por contador público y el revisor fiscal, asimismo, se podrá presentar electrónicamente. Cada año es susceptible de modificación, siendo las de los últimos periodos: año 2019: 33%, año 2020: 32%, año 2021: 31% y para el año 2022: 30%. 
      .row.justify-content-center(titulo="Impuesto al patrimonio")
        .col-lg-10
          p.mb-0 Es el impuesto que grava la riqueza, entendida esta como el patrimonio líquido que la empresa tenga el primero de enero de cada año. Este impuesto es aplicable a las personas naturales o personas jurídicas que al 1 de enero contaran con un patrimonio líquido de cinco mil millones de pesos, donde el pago de este tributo se dará en conformidad con el calendario tributario que se fije.
        
    h3 E. Ciclo contable   
    p.mb-4 La contabilidad inicia su aplicación cuando la empresa u organización inicia su actividad y, posteriormente, se lleva por periodos anuales, los cuales inician el 1 de enero y terminan el 31 de diciembre de cada año; si la empresa inicia el 23 de mayo, su primer ejercicio irá hasta el 31 de diciembre, y posteriormente por todo el año, tal como se indicó.
    p.mb-5 A continuación, observe la definición detallada del ciclo contable, a través del siguiente video:  
    figure.mb-5 
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/NhsdLCBUev4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-4 
      .col-lg-6
        h4.mb-4 Como se puede ver, el análisis del ciclo contable le permite a la empresa conocer a detalle la situación económica y financiera, permitiendo identificar que, si hay ganancias o pérdidas, la empresa diseñará un nuevo plan estratégico para el nuevo periodo.
      .col-lg-6
        p.mb-4 Cabe señalar que las empresas u organizaciones ordenadas prefieren desarrollar su ciclo contable de modo mensual, bimestral, trimestral, semestral, y no ceñirse meramente al mínimo de una vez en el año de ejercicio, por que perderían capacidad de maniobra y toma de decisiones oportunas, bien sean de crecimiento o para corregir aspectos negativos.
    
    .row.justify-content-center.mb-5 
      .col-10
        .tarjeta.color-acento-botones.p-3.px-5
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1.p-0
              img.w-100(src="@/assets/curso/tema2/img05.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Anexo - Ciclo contable completo
                  p.text-small.texto-blanco Para efectos de clarificar lo expuesto en esta fase de desarrollo del ciclo contable, se recomienda hacer lectura del ejemplo de un supuesto práctico de un ciclo contable completo a través de la dirección financiera y control de gestión. 
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Anexo-Ciclo-contable-completo.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-4 Finalmente, es importante tener presente que la empresa u organización empresarial es una unidad económica activa que se asemeja a una persona natural, por eso se les puede denominar persona jurídica, la cual es la asociación de una o varias personas plenamente identificables o de carácter anónimo, que ponen a disposición una serie de recursos para que sean productivos económicamente y poder así ofrecer bienes, productos o servicios a un mercado o beneficiarios específicos, para cumplir el propósito que decidieron desarrollar y alcanzar los dueños, socios o accionistas.
    p.mb-5 Para dar cumplimiento a la actividad comercial, industrial o de servicios, el o los empresarios deberán cumplir con los siguientes requisitos que formalizarán la actividad que desarrollarán:

    figure.mb-5 
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/NhsdLCBUev4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-5 
      .col-10
        .tarjeta.color-secundario.p-3.px-5
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1.p-0
              img.w-100(src="@/assets/curso/tema2/img05.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Requisitos de Formalización
                  p.text-small.texto-blanco Adicionalmente, puede descargar los requisitos de formalización para que pueda tenerlos de forma local. 
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Generalidades.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
