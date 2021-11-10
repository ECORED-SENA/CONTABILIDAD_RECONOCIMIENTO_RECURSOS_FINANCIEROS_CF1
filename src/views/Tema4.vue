<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Soportes contables

    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-4 En la contabilidad, los soportes contables cobran mucha relevancia, ya que son documentos que prueban y evidencian la ocurrencia de los hechos económicos de la empresa, como las facturas de compra de mercancías o facturas de venta de productos de la empresa, asimismo, puede ser una letra que se firmó como respaldo de un crédito ante un acreedor no bancario. Los soportes son los documentos que evidencian y expresan la voluntad de las partes en los acuerdos comerciales o en transacciones financieras y económicas.
      .col-lg-5
        h4.mb-4 Igualmente, las transacciones comerciales deben reconocerse monetariamente, por medio de una serie de documentos contables y documentos no contables, así como de los títulos de valores que intervienen en el hecho económico (Angulo, 2018).

    p.mb-5 A continuación, puede visualizar los soportes contables y cada una de las categorías.
    
    .row.justify-content-center.mb-4
      .col-lg-6.d-flex.align-items-center
        div
          p.mb-5 Con el propósito de ampliar sobre los detalles de definición e identificar las características de los principales documentos soportes contables y su diligenciamiento, se recomienda revisar:
          .row.justify-content-start.mb-4.px-0
            .col-lg-5.px-0
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo-Documentos-Soporte-Contable.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto            
                  p <b>Anexo.</b> Documentos de Soporte Contable

              a.anexo.mb-4(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr020.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto            
                  p <b>Enlace web.</b> Títulos valores código de comercio.

            .col-lg-5.px-0
              a.anexo.mb-4(href="https://youtu.be/YChHSEVNgC0" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto            
                  p <b>Enlace web.</b> Video Soportes Contable
              
              a.anexo.mb-4(:href="obtenerLink('/downloads/266_4capitulo_ii_titulos_valores.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto            
                  p <b>Anexo.</b> Sistema general de títulos valores.
      .col-lg-4
        figure.px-0
          img(src='@/assets/curso/tema4/img01.png')
    
    Separador


</template>

<script>
export default {
  name: 'Tema4',
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
