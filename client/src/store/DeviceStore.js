import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Phone"},
            {id: 2, name: "Холодильник"}
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.bing.com/images/search?view=detailV2&ccid=0iqvqUM%2b&id=144168CC225513177DCCFDB80C574F8DA880608B&thid=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d22aafa9433efcc9ed4d9a7808c05a8a%3frik%3di2CAqI1PVwy4%252fQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=images&simid=608010324247783692&FORM=IRPRST&ck=B7624969539C28ABFD57437A8B19724A&selectedIndex=4&itb=0&ajaxhist=0&ajaxserp=0"},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.bing.com/images/search?view=detailV2&ccid=0iqvqUM%2b&id=144168CC225513177DCCFDB80C574F8DA880608B&thid=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d22aafa9433efcc9ed4d9a7808c05a8a%3frik%3di2CAqI1PVwy4%252fQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=images&simid=608010324247783692&FORM=IRPRST&ck=B7624969539C28ABFD57437A8B19724A&selectedIndex=4&itb=0&ajaxhist=0&ajaxserp=0"},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.bing.com/images/search?view=detailV2&ccid=0iqvqUM%2b&id=144168CC225513177DCCFDB80C574F8DA880608B&thid=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d22aafa9433efcc9ed4d9a7808c05a8a%3frik%3di2CAqI1PVwy4%252fQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=images&simid=608010324247783692&FORM=IRPRST&ck=B7624969539C28ABFD57437A8B19724A&selectedIndex=4&itb=0&ajaxhist=0&ajaxserp=0"},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.bing.com/images/search?view=detailV2&ccid=0iqvqUM%2b&id=144168CC225513177DCCFDB80C574F8DA880608B&thid=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d22aafa9433efcc9ed4d9a7808c05a8a%3frik%3di2CAqI1PVwy4%252fQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=images&simid=608010324247783692&FORM=IRPRST&ck=B7624969539C28ABFD57437A8B19724A&selectedIndex=4&itb=0&ajaxhist=0&ajaxserp=0"},
            {id: 5, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://www.bing.com/images/search?view=detailV2&ccid=0iqvqUM%2b&id=144168CC225513177DCCFDB80C574F8DA880608B&thid=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2019%2f09%2f432739-lake-pond-golden-trees-tropical-forest-stream-leaves-hdr-ultrahd-black-white-hd-4k-wallpaper-3840x2160.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d22aafa9433efcc9ed4d9a7808c05a8a%3frik%3di2CAqI1PVwy4%252fQ%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=images&simid=608010324247783692&FORM=IRPRST&ck=B7624969539C28ABFD57437A8B19724A&selectedIndex=4&itb=0&ajaxhist=0&ajaxserp=0"}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}