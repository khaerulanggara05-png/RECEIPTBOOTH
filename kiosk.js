{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // js/kiosk.js\
\
// Load data from admin panel\
const packagesData = JSON.parse(localStorage.getItem('packages')) || \{\
  p1:\{name:'Basic Receipt',price:10000\},\
  p2:\{name:'Premium Receipt',price:20000\}\
\}\
\
const boothInfo = JSON.parse(localStorage.getItem('boothInfo')) || \{\
  booth:'MEMORY STORE',\
  title:'Receipt Booth'\
\}\
\
// Render UI\
function initKiosk()\{\
  document.getElementById('boothName').innerText = boothInfo.booth\
  document.getElementById('receiptTitle').innerText = boothInfo.title\
\
  document.getElementById('pkg1Name').innerText = packagesData.p1.name\
  document.getElementById('pkg1Price').innerText = 'Rp ' + packagesData.p1.price\
\
  document.getElementById('pkg2Name').innerText = packagesData.p2.name\
  document.getElementById('pkg2Price').innerText = 'Rp ' + packagesData.p2.price\
\}\
\
// Transaction system\
let currentTransaction = \{\}\
\
function selectPackage(pkg)\{\
  if(pkg === 1)\{\
    currentTransaction = packagesData.p1\
  \} else \{\
    currentTransaction = packagesData.p2\
  \}\
  document.getElementById('selectedPackage').innerText = currentTransaction.name\
  document.getElementById('selectedPrice').innerText = 'Rp ' + currentTransaction.price\
\}\
\
function printReceipt()\{\
  if(!currentTransaction.name)\{\
    alert('Pilih paket dulu')\
    return\
  \}\
\
  const receipt = \{\
    booth: boothInfo.booth,\
    title: boothInfo.title,\
    package: currentTransaction.name,\
    price: currentTransaction.price,\
    time: new Date().toLocaleString()\
  \}\
\
  let logs = JSON.parse(localStorage.getItem('logs')) || []\
  logs.push(receipt)\
  localStorage.setItem('logs', JSON.stringify(logs))\
\
  alert('Receipt printed! (demo)')\
\}\
\
// Auto init\
document.addEventListener('DOMContentLoaded', initKiosk)\
}
