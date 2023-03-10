const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: [
    "01-01",
    "01-02",
    "01-06",
    "01-07",
    "01-08",
    "01-09",
    "01-10",
    "01-11",
    "01-",
  ],
  water: ["01-01", "01-02", "01-06", "01-08"],
  food: ["01-01", "01-02", "01-06"],
  journal: ["01-01", "01-02", "01-06", "01-08"],
}

nlwSetup.setData(data)
nlwSetup.load()
