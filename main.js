const app = Vue.createApp({
  data() {
    return {
      titulo: "Este es un ejemplo de VueJS",
      cantidad: 400,
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
    sustraccionSaldo() {
      if(this.cantidad === 0) {
        this.desactivar = true
        alert ('Saldo insuficiente para su sustracción')
        return
      }
      this.cantidad = this.cantidad - 100
    }
  }
})