const app = Vue.createApp({
  data() {
    return {
      titulo: "Este es un ejemplo de VueJS",
      cantidad: 700,
      enlace: 'https://www.youtube.com/watch?v=Ywo9CoI5dtM&ab_channel=ReikReikOfficialArtistChannel',
      estado: true,
      servicios: [
        'transferencias',
        'pagos',
        'giros',
        'cheques',
      ],
      desactivar: false,
    }
  },

  methods: {
    adicionSaldo() {
      this.cantidad = this.cantidad + 100
    },
    sustraccionSaldo(valor) {
      if(this.cantidad === 0 || this.cantidad < 0) {
        this.desactivar = true
        alert ('Saldo insuficiente para su sustracción')
        return
      }
      this.cantidad = this.cantidad - valor
    }
  },

  computed: {
    colorCantidad(){
      return this.cantidad > 500 ? 'text-success' : 'text-danger'
    },
    tituloMayusculas(){
      return this.titulo.toUpperCase()
    },
  }
})