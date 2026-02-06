{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // js/admin.js\
\
// Save Booth Info\
function saveBooth() \{\
  const boothName = document.getElementById('boothNameInput').value;\
  const receiptTitle = document.getElementById('receiptTitleInput').value;\
\
  const boothData = \{ boothName, receiptTitle \};\
  localStorage.setItem('boothData', JSON.stringify(boothData));\
\
  alert('\uc0\u9989  Info booth berhasil disimpan');\
\}\
\
// Save Packages\
function savePackages() \{\
  const pkg1Name = document.getElementById('pkg1NameInput').value;\
  const pkg1Price = document.getElementById('pkg1PriceInput').value;\
  const pkg2Name = document.getElementById('pkg2NameInput').value;\
  const pkg2Price = document.getElementById('pkg2PriceInput').value;\
\
  const pkgData = \{\
    pkg1: \{ name: pkg1Name, price: pkg1Price \},\
    pkg2: \{ name: pkg2Name, price: pkg2Price \}\
  \};\
\
  localStorage.setItem('packageData', JSON.stringify(pkgData));\
  alert('\uc0\u55357 \u56550  Paket berhasil disimpan');\
\}\
\
// Load Logs\
function loadLogs() \{\
  const logs = JSON.parse(localStorage.getItem('transactionLogs')) || [];\
  const logBox = document.getElementById('logBox');\
\
  if (logs.length === 0) \{\
    logBox.textContent = 'Belum ada transaksi';\
    return;\
  \}\
\
  let output = '';\
  logs.forEach((log, i) => \{\
    output += `$\{i + 1\}. $\{log.time\} | $\{log.package\} | Rp $\{log.price\}\\n`;\
  \});\
\
  logBox.textContent = output;\
\}\
\
// Reset System\
function resetSystem() \{\
  if (!confirm('\uc0\u9888 \u65039  Yakin reset semua data?')) return;\
\
  localStorage.clear();\
  alert('\uc0\u55357 \u56580  Sistem berhasil di-reset');\
  location.reload();\
\}\
\
// Auto Load Existing Data\
window.onload = function () \{\
  const boothData = JSON.parse(localStorage.getItem('boothData'));\
  const pkgData = JSON.parse(localStorage.getItem('packageData'));\
\
  if (boothData) \{\
    document.getElementById('boothNameInput').value = boothData.boothName || '';\
    document.getElementById('receiptTitleInput').value = boothData.receiptTitle || '';\
  \}\
\
  if (pkgData) \{\
    if (pkgData.pkg1) \{\
      document.getElementById('pkg1NameInput').value = pkgData.pkg1.name || '';\
      document.getElementById('pkg1PriceInput').value = pkgData.pkg1.price || '';\
    \}\
    if (pkgData.pkg2) \{\
      document.getElementById('pkg2NameInput').value = pkgData.pkg2.name || '';\
      document.getElementById('pkg2PriceInput').value = pkgData.pkg2.price || '';\
    \}\
  \}\
\
  loadLogs();\
\};\
}
