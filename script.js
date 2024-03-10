
var collection = [
    {
        name: "phele bhi mai",
        image: "assets/songs-img/phele-bhi-main.jpg",
        url: "assets/songs/ANIMAL_Pehle_Bhi_MainFull_Video___Ranbir_KapoorTripti_Dimri__Sandeep_V__Vishal_MRaj_S__Bhushan_K.mp3"
    },
    {
        name: "Khalastar",
        image: "assets/songs-img/khalastar.jpg",
        url: "assets/songs/KALAASTAR_-_Full_Video___Honey_3.0___Yo_Yo_Honey_Singh__Sonakshi_Sinha___Zee_Music_Originals.mp3"
    },
    {
        name: "Husn",
        image: "assets/songs-img/husn.jpg",
        url: "assets/songs/Anuv_Jain_-_HUSN_Official_Video.mp3"
    },
    {
        name: "Wishes",
        image: "assets/songs-img/wishes.jpg",
        url: "assets/songs/wishes_-_talwiinders_verse_looped.mp3"
    },
];


function render() {
    let clutter = ""
    collection.forEach(obj=>{
        clutter += ` <div class="song" id="">
        <img src=${obj.image} alt=${obj.name}>
        <h3>${obj.name}</h3>
    </div>` 
        
    document.querySelector(".column").innerHTML = clutter
        console.log(obj.image);
    })
}

render()