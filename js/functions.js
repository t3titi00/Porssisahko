const current_span = document.querySelector('#current-price')
const tbody = document.querySelector('#price-table tbody')
const date = new Date()
const year = date.getFullYear()
const month = ("0" + (date.getUTCMonth() + 1)).slice(-2)
const day = ("0" + (date.getDate())).slice(-2)
const hour = date.getHours()




const url = 'http://localhost:3000/api/porssisahko' + '?date=' + year + '-' + month + '-' + day + '&hour=' + hour
console.log(url)


const getPrice = () => {
    axios
    .get(url)
    .then(response => {
        const json = response.data
        current_span.innerHTML = json.price.toFixed(2) + ' snt/kWh'
        console.log(json.price)

    }).catch(error =>{
        alert(error)
    })
}

const loadTable = () => {
    axios
      .get('http://localhost:3000/api/porssisahko/all')
      .then(response => {
        const prices = response.data;
        tbody.innerHTML = "";
  
        prices.forEach(entry => {
          const time = new Date(entry.startDate);
  
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${time.toLocaleDateString()}</td>
            <td>${time.getHours()}:00</td>
            <td>${entry.price.toFixed(2)} snt/kWh</td>
          `;
          tbody.appendChild(row);
          
        });
      })
      .catch(error => {
        console.error("Virhe taulukon latauksessa:", error);
      });
  };

document.addEventListener("DOMContentLoaded", (event) => {
    getPrice()
    loadTable()
  });