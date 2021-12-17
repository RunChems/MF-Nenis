const url = "https://hidden-shelf-08410.herokuapp.com/api/v1";
let htmlContent = "";
function fetchApi() {
    return new Promise(async (resolve, reject) => {
        const data = await fetch(`${url}/nenis`);
        const json = await data.json();
        resolve(json);
        console.log(json);

    });
}

const container = document.querySelector(".content");
fetchApi().then(
    (data) => {

        for (let i = 0; i < data['data']["Las nenis de chemaaaaa"].length; i++) {
            const name = data.data["Las nenis de chemaaaaa"][i]["Neni Nombre"];
            // const img = data.data["Las nenis de chemaaaaa"][i]["Imagen de neni"];
            const description = data. data["Las nenis de chemaaaaa"][i]["Tipo de chems"]["Chems Descripcion"];
            const mainActivity = data.data["Las nenis de chemaaaaa"][i]["Actividad principal como neni"]
            // const img = "https://scontent.fpbc1-1.fna.fbcdn.net/v/t39.30808-6/257417710_652361225772144_3894784096839103111_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFDawDKCJBFFvPOFubRq0rQDXYGxMLsKAUNdgbEwuwoBXbJycWM2DP14I2TNK0huzZmxXWHsaeqoFPrP6DyMwlw&_nc_ohc=kP8w9pqf7PwAX8GYDgC&_nc_ht=scontent.fpbc1-1.fna&oh=00_AT_YnpU4FAEsiAfJ9qRIVJKDKlZGYXfumcWMPWy1c2iIlQ&oe=61BF4E4Dhttps://scontent.fpbc1-1.fna.fbcdn.net/v/t39.30808-6/257417710_652361225772144_3894784096839103111_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFDawDKCJBFFvPOFubRq0rQDXYGxMLsKAUNdgbEwuwoBXbJycWM2DP14I2TNK0huzZmxXWHsaeqoFPrP6DyMwlw&_nc_ohc=kP8w9pqf7PwAX8GYDgC&_nc_ht=scontent.fpbc1-1.fna&oh=00_AT_YnpU4FAEsiAfJ9qRIVJKDKlZGYXfumcWMPWy1c2iIlQ&oe=61BF4E4D";
            
           
                
            htmlContent += `
                <div class= "col  d-flex justify-content-center ">
                <div class="card card-neni" style="width: 18rem;">
                <img src="./cheems.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text  nameneni">${name}</p>
                  <p class="card-text">${description}</p>
                  <p class="card-text">${mainActivity}</p>
                  
                </div>
              </div>
                 </div> 
                    `


            // for (let neni of Object.keys(data['data']["Las nenis de chemaaaaa"][i])) {
            //     const value = data['data']["Las nenis de chemaaaaa"][i][neni];
            //     //When is an object (When chems type is the field in this case)
            //     if (typeof value === "object") {
            //         for (const obj of Object.keys(value)) {
            //             container.innerHTML += obj + value[obj] + "<br>";
            //         }
            //     } else {
            //         container.innerHTML += neni + ":" + value + "<br>";
            //     }
            // }
        }
        container.innerHTML = htmlContent;
    }


)

