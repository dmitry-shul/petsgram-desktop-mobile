import axios from "axios";

const a1a = {
  "name": "Tanya",
  "userName": "tanya",
  "password": "keks",
  "darkTheme": true,
  "pets": [
    {
      "owner": "Tanya",
      "name": "Keks",
      "type": "cat",
      "mainPhoto": "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
      "photos": [
        "qqqjpg",
        "ddd.jpg"
      ]
    },
    {
      "owner": "Tanya",
      "name": "Sobaken",
      "type": "dog",
      "mainPhoto": "https://www.akc.org/wp-content/uploads/2017/11/Entlebucher-Mountain-Dog-outdoors-standing-in-a-field.jpg",
      "photos": [
        "ggg.jpg",
        "derdf.jpg"
      ]
    }
  ]
}


const users = [
  {
    "id": "ZIKjXZlU9X",
    "name": "Tanya",
    "email": "matemV@mail.ru",
    "password": "keks",
    "darkTheme": true,
    "pets": ["ubPcTbU27Z", "kdPjL7jDnu"]
  },
  {
    "id": "0ePKNLtP4f",
    "name": "Misha",
    "email": "rinstagram01@mail.ru",
    "password": "mefef",
    "darkTheme": true,
    "pets": ["ubPcTbU27Z"]
  }
]



const pets = [
  {
    "id": "ubPcTbU27Z",
    "name": "Kit",
    "type": "cat",
    "owner": "Tanya",
    "ownerId": "UE7JUWiorqMwQrSHXYc5DIw2p3O2",
    "mainPhoto": "https://kipmu.ru/wp-content/uploads/jvtnbljk.jpg",
    "photos": [
      "https://images.ctfassets.net/9l3tjzgyn9gr/photo-112402/cf25fec1eea7ab0665f586b3481e436c/112402-rabbit-lucky-animals-510x600.jpg",
      "https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png",
      "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg",
      "https://m3.healio.com/~/media/slack-news/infectious-disease/misc/infographics/2021/12_december/idn1221teres_graphic_01_web.jpg",
      "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg"
    ]
  },
  {
    "id": "kdPjL7jDnu",
    "name": "Sobaken",
    "type": "dog",
    "owner": "Tanya",
    "ownerId": "UE7JUWiorqMwQrSHXYc5DIw2p3O2",
    "mainPhoto": "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
    "photos": [
      "qqqjpg",
      "ddd.jpg"
    ]
  },
  {
    "id": "F7hDzEgUTa",
    "name": "Swinka",
    "type": "pig",
    "owner": "Misha",
    "ownerId": "0ePKNLtP4f",
    "mainPhoto": "https://www.m24.ru/b/d/nBkSUhL2hFUkmc-3Ir6BrNOp2Z318Ji-mifCm-WR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=iQj1lGhlni-VKNmVFIJBeA.jpg",
    "photos": [
      "https://zooclub.ru/attach/52000/52784.jpg"
    ]
  }
]


/*export async function qqq() {
  await axios.put("https://api.jsonbin.io/v3/b/638aa4667966e84526d2a710", {"ddw": "eureur"}); 
  const response = await axios.get("https://api.jsonbin.io/v3/b/638aa4667966e84526d2a710"); 
  console.log(response.data.record)
}*/

