
# อ่านก่อน #

Code ที่ให้มาไม่ได้มีการเชื่อมต่อกับฐานข้อมูล ฉะนั้นผู้เข้าแข่งขันต้องนำไปประยุกต์จำเป็นต้องมี
Code ส่วนนี้มีการทำงานเฉพาะส่วน ดังรายละเอียดด้านล่าง

ภายใน Code นี้จะประกอบไปด้วย 3 ส่วน
1. ส่วน Schema GET_IN_OUT_CAR
2. ส่วน function stationsFN
3. ส่วน app.post() เพื่อบันทึกข้อมูลลง table <GET_IN_OUT_CAR>


### ส่วนที่ 1 : Schema GET_IN_OUT_CAR ###
ส่วนนี้รายละเอียดสามารถอ่านได้จาก เอกสาร Database Format


### ส่วนที่ 2 : function stationsFN ###
function stationsFN มีไว้สำหรับค้นหา stationID โดยจะมี parameter 3 ค่า คือ latitude, longitude, fn (fn คือ callback function)
  #### สิ่งที่ต้องมีก่อนเรียกใช้ function stationsFN ####
   - จำเป็นต้องมี model STATION ที่มีข้อมูล ถ้่าไม่มีจะเกิดปัญหาค้นหาไม่เจอ (หากต้องการตัวขอมูล STATION สามารถขอได้ที่ Staff)
   - ต้องมีการติดตั้่ง npm ชื่อ gps-distance สามารถอ่านข้อมูลเพิ่มเติมได้ที่ https://www.npmjs.com/package/gps-distance


### ส่วนที่ 3 : app.post() เพื่อบันทึกข้อมูลลง table <GET_IN_OUT_CAR> ###
รายละเอียดการ post ขึ้นอยู่กับ Schema สามาารถอ่านเพิ่มเติมได้จาก เอกสาร Database Format


==========================================================================

###### หากมีข้อสงสัยเกี่ยวกับ function สามารถถาม Staff ได้ ######
