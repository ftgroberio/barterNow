function addUserDB(HASMap,NEEDSMap){

    HASMap.get('toilet_paper').add({ name: 'Cam', location: 'Texas' });
    HASMap.get('clorox').add({ name: 'Cam', location: 'Texas' });
    NEEDSMap.get('hand_sanitizer').add({ name: 'Cam', location: 'Texas' });

    HASMap.get('hand_sanitizer').add({ name: 'Felipe', location: 'Texas' });
    NEEDSMap.get('clorox').add({ name: 'Felipe', location: 'Texas' });

    HASMap.get('water').add({ name: 'Lifang', location: 'Texas' });
    HASMap.get('clorox').add({ name: 'Lifang', location: 'Texas' });
    HASMap.get('toilet_paper').add({ name: 'Lifang', location: 'Texas' });
    NEEDSMap.get('toilet_paper').add({ name: 'Lifang', location: 'Texas' });

    HASMap.get('gloves').add({ name: 'Ryan', location: 'Texas' });
    HASMap.get('toilet_paper').add({ name: 'Ryan', location: 'Texas' });
    HASMap.get('face_mask').add({ name: 'Ryan', location: 'Texas' });
    NEEDSMap.get('water').add({ name: 'Ryan', location: 'Texas' });

}
module.exports = addUserDB;
