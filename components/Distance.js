/* eslint-disable indent */

//kahden pisteen välinen etäisyys
const Distance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // km
  var dLat = (lat2-lat1);
  var dLon = (lon2-lon1);
  var condition = 0.1; //etäisyys decimal degrees = n.11km

  var a = Math.pow(Math.sin(dLat/2), 2) + (Math.cos(lat1)) * (Math.cos(lat2)) * Math.pow((Math.sin(dLon/2)), 2);
  var b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var c = R * b;

//suodattaa etäisyyden perusteella, etäisyys<11km
  if(c <= condition) {
      return c;
  } else {
      return null;
  }
}
export default Distance;
