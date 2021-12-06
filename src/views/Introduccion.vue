<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Las actividades económicas regulares surgen de las capacidades adquiridas por los individuos, bien sea porque estudiaron y se formaron y emprenden un negocio o porque, a través del trabajo dependiente y la experiencia, cuando se agota o termina la dependencia, deciden emprender; siendo en ambos casos el oficio que se domina la fuente de la actividad a futuro.
    
    div.position-relative
      .row.justify-content-center
        .col-lg-4
          figure
            img(src='@/assets/curso/img01.png') 
        .col-lg-6
      div.position-absolute.top-0.start-0.d-flex.h-100.align-items-center
        div
          .row.justify-content-center.mb-5
            .col-lg-3
            .col-lg-7
              h4 <b>Es así cuando surge la necesidad de llevar un sistema contable acorde con la normatividad, oportuno y confiable, que facilite la lectura e interpretación de lo ocurrido en la operación de la empresa y que facilite la toma de decisiones por parte del empresario o de quien lleve la administración.</b>
            .col-lg-2
          .row.justify-content-center
            .col-lg-5
            .col-lg-6
              p.mb-4 Este componente lo orientará hacia el proceso contable y organizar su actividad comercial. 
              p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en <b>contabilidad y hechos económicos</b>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este componente formativo sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del <b>reconocimiento de recursos financieros</b>.
            .col-lg-1

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
