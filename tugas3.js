const allData = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
    try{
        let showData = filterData(nilaiAwal, nilaiAkhir, dataArray);
        if (typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number') throw `Data awal/akhir bukan angka`;
        if ( nilaiAwal > nilaiAkhir ) throw 'Nilai akhir harus lebih besar';
        if ( dataArray.length < 5) throw 'Data array harus lebih dari 5';
        if ( !Array.isArray(dataArray)) throw 'Data harus array';
        if ( s.length == 0) throw `Data tidak ditemukan`;
        
        return console.log(`output : ${showData}`);  
    }catch(e){
        console.log(`Error : ${e}`);
    }
}
const filterData = (nilaiAwal, nilaiAkhir, dataArray) => {
        aw = dataArray.sort((a, b) => a - b);
        s = aw.filter(function(number){
        return number < nilaiAkhir && number > nilaiAwal;
        });

        return s;
}

allData(3,15,[1,2,3,4,5,6,7,8,9],filterData);

