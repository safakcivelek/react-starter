import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";

// JS ASYNC
// Built-in Promise
export default function Homepage() {
  //***Önceki çalışmalar. Bu kısım commit edildi...
  // const myAsyncFunction = () => {
  //   return new Promise((resolve, reject) => {
  //     // async işlem
  //     setTimeout(() => {
  //       resolve("veri örneği");   // işlemin başarılı olması
  //       //reject("istek başarısız");// işlemin başarısız olması 
  //     }, 3000);
  //   });
  // };

  // useEffect(() => {
  //   //fire and foreget
  //   //thenCatchFinnaly();
  //   asyncAwait();
  // }, []);

  // // ES2017 => async, await
  // // Vanilla Java, Vanilla c#, Vanilla Javascript

  // const asyncAwait = async () => {
  //     try {
  //       let response = await myAsyncFunction();
  //     console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  // };

  // const thenCatchFinnaly = () => {
  //   console.log("loading başladı")
  //   myAsyncFunction()
  //     .then(response => {
  //       console.log("Bir cevap geldi:", response);
  //     })
  //     .catch(err => {
  //       console.log("Bir hata geldi:", err);
  //     })
  //     .finally(() => {
  //       console.log("Async işlem sonlandı");
  //       console.log("loading bitti");
  //     });
  // };

  
  {/* http isteği */}
  useEffect(() => {
    //gelen veriyi json olarak consol'a yazdır ?
    // fetch("https://dummyjson.com/products")
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err));

    //awaitFetch();

    axiosGet();
  }, [])

  //thenCatch için alternatif
  const awaitFetch = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let json = await response.json();
    console.log(json);
  } 

  // => axios 
  // axios => http istekleri atmaya yarayan bir pakettir.
  // axios => fetch ile aynı işlevi vardır.
  // axios => fetch'e göre kolaylık sağlar. Syntax'ı daha kolaydır.
  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    console.log(response);
  }

  return (
    <div>         
      {/* SPA'larda href atrribute'ı kullanımı yanlıştır.*/}     
      <Link to={"/products"}>Ürünler Sayfası2</Link>

    </div>
  )
}
