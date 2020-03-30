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

    HASMap.get('alcohol').add({ name: 'Laura', location: 'Texas' });
    HASMap.get('canned_beans').add({ name: 'Laura', location: 'Texas' });
    NEEDSMap.get('diapers').add({ name: 'Laura', location: 'Texas' });

    HASMap.get('lysol').add({ name: 'Daniel', location: 'Texas' });
    HASMap.get('detergent').add({ name: 'Daniel', location: 'Texas' });
    NEEDSMap.get('battery').add({ name: 'Daniel', location: 'Texas' });

    HASMap.get('thermometer').add({ name: 'Hector', location: 'Texas' });
    HASMap.get('clorox_wipes').add({ name: 'Hector', location: 'Texas' });
    NEEDSMap.get('alcohol').add({ name: 'Hector', location: 'Texas' });

    HASMap.get('eggs').add({ name: 'Rita', location: 'Texas' });
    HASMap.get('milk').add({ name: 'Rita', location: 'Texas' });
    NEEDSMap.get('canned_beans').add({ name: 'Rita', location: 'Texas' });

    HASMap.get('paper_towel').add({ name: 'Gabi', location: 'Texas' });
    HASMap.get('rice').add({ name: 'Gabi', location: 'Texas' });
    NEEDSMap.get('gloves').add({ name: 'Gabi', location: 'Texas' });

    HASMap.get('vaseline').add({ name: 'Matt', location: 'Texas' });
    HASMap.get('baby_food').add({ name: 'Matt', location: 'Texas' });
    NEEDSMap.get('toilet_paper').add({ name: 'Matt', location: 'Texas' });

    HASMap.get('rice').add({ name: 'Johnny', location: 'Texas' });
    HASMap.get('detergent').add({ name: 'Johnny', location: 'Texas' });
    NEEDSMap.get('diapers').add({ name: 'Jhonny', location: 'Texas' });

    HASMap.get('alcohol').add({ name: 'Tom', location: 'Texas' });
    HASMap.get('clorox').add({ name: 'Tom', location: 'Texas' });
    NEEDSMap.get('face_mask').add({ name: 'Tom', location: 'Texas' });
}
module.exports = addUserDB;
