//*** Önceki çalışmalarım, notlarım burada yer alıyor... */
// import './App.css';
// import { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import ProductCard from './ProductCard';

// // JSX => javascript ile html'in birleştirildiği syntax'a jsx denir.
// // JSX => HTML + JS
// // Dolayısıyla alttaki yapı saf html değil JSX yapısıdır.
// // Component'e (App) bir Css eklemek istersek, Css dosyasını Component'e 'import' ederiz.
// // import-export => javascript'de birşeyi 'import' edebilmemiz için o şeyin 'export' edilmiş olması gerekir.(yani dışarıya açılabiliyor olması gerekir.)
// // Yani 'export' etmediğim birşeyi 'import' edemem!!!

// function App() { 
//     //JSX' de bir kural var => JSX'in tüm elemanlarının en az tek bir eleman tarafından 'sarmallanıyor' olması lazım.
//     //sarmallamak => açılma ve kapanma tag'larının arasında yazılması demektir. <> </>
//     //Neden tek bir element içinde olması gerekir çünkü => React herşeyi tek bir component tek bir element olarak ele alır o yüzden dönecek olan şeyin tek bir element halinde gitmesi gerekir. 
    
//     //Biz JSX'in html tarafındayken javascript kodu yazmak için süslü parantez {} kullanıcaz.
    
//     //useState => react içindeki değişkenler takip edilmezler yani değişkenin değeri değiştiğinde arayüzde(UI) html'deki görüntü değişmez. İşte UI'daki,html'deki görüntünün değişmesi için react'ın state'i içinde tanımlamam gerekir değişkeni. Bunuda 'useState' bize sağlar.
//     //yani 'useState' değişkenin getter'ini ve setter'ini oluşturur bizim için. Okuyabileceğimiz ve yazabileceğimiz bir alan.
    
//     //react hooks
//     //backend'deki get ve set gibi (total,settotal)
//     //Neden 'const' => total değişicek ama total'in tanımını değiştirimicez.
    
//     const [total, setTotal] = useState(5);

//     // useEffect
//     // component ilk render edildiğinde
//     // dep. listesindeki verilerin değiştiği anda tekrar tetiklenen yapıdır.
//     useEffect(
//       () => {
//         if(total > 10) {
//           alert("Total 10'dan büyük olamaz!")
//           setTotal(10);
//         }
//         console.log(total)
//       },
//       [total]);

//       //bu use effect sadece sayfa açıldığında çalışır.
//       useEffect(() => {
//         console.log("use effect 2!")      
//       }, [])
      
//     const increase = () => {
//       setTotal(total +1);    
//     }
//     const decrease = () => {
//       setTotal(total -1);   
//     }

//     // Two Way Data Binding
//     // input değişirse değişken değişir, Değişken değişirse input değişir. Çift yönlü ver eşleştirme!
//     const [activity, setActivity] = useState("");
//     const [activityList, setActivityList] = useState(["Aktivite 1","Aktivite 2", "Aktivite 3"]);

//     const clearActivity = () => {
//       setActivity("");
//     }
//      const addActivity = () => {
//     //   setActivityList((prevState) => {
//     //     prevState.push(activity);
//     //     console.log(prevState);
//     //     return prevState;
//     //   })
//     setActivityList([...activityList,activity]);
//     clearActivity();
//     }
//     const removeActivity = (activity) => {
//       setActivityList(activityList.filter(i=>i !== activity));
//     }
//     let id =1
//     return (
//     <>
//     <Navbar name="halit" id ={id} />
//     {/* <Navbar>
//       <div>Merhaba</div>
//     </Navbar> */}
//       <div >
//         <p>{total}</p>      
//       </div>
//       <div>
//         <button onClick={increase}>Arttır</button>
//         <button onClick={() => {decrease()}}>Azalt</button>
//       </div>
//       <hr />
//       <div>
//         <input value={activity} onChange={(event) => { setActivity(event.target.value) }} type='text' placeholder='Aktivite' />
//         <br />
//         <button onClick={() => {addActivity() }}>Ekle</button>
//         <ul>
//           {/* JSX içerisinde iterasyonlar her zaman MAP ile yapılmalıdır. */}
//           {activityList.map((element) => <li key = {element}>{element} <button onClick={() => {removeActivity(element)}}>X</button></li> )}
//         </ul>
//       </div>

//       <ProductCard name="Laptop" classes="yellow-border" price={5000}/>
//       <ProductCard name="Mouse" price={300}/>

//     </>
//   );
// }

// // Burada export alanını silersek index.js de hata alırız.
// // default => default olarak sadece 1 alanı export edebiliriz.
// // default => eğer default kullanıcak ise index.js de import ederken sadece ilgili alanın ismini yazmamız yeterli.
// // Fakat default kullanmaz isek normal export'lar süslü parantez {} içinde belirtilmesi gerekir.
// // default => ilgili alanı tanımlarkende export default yapılabilir. => export default function App() {return} gibi...
// export default App;

import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"

export default function App() {
  return <>
  <Navbar/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}