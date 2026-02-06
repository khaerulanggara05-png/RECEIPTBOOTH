<script>
function createTransaction(){
  const tx = {
    id: 'TX-' + Date.now(),
    layout: null,
    price: null,
    photo: null,
    frame: null,
    paid: false,
    time: new Date().toISOString()
  }
  localStorage.setItem('transaction', JSON.stringify(tx))
  return tx
}

function getTransaction(){
  return JSON.parse(localStorage.getItem('transaction'))
}

function updateTransaction(data){
  const tx = getTransaction()
  const newTx = {...tx, ...data}
  localStorage.setItem('transaction', JSON.stringify(newTx))
}

function clearTransaction(){
  localStorage.removeItem('transaction')
}
</script>
