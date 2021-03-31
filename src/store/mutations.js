export default {
  changeCity (stage, city) {
    stage.city = city

    try {
      localStorage.city = city
    } catch (e) {}
  }
}
