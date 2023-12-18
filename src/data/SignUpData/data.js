const personalInfoData=[
    {label:'First Name',name:'firstName',type:'string',required:true},
    {label:'Last Name',name:'lastName',type:'string',required:true},
    {label:'Gender',name:'gender',type:'string',required:true,select:true,selectList:["Male","Female","Other"]},
    {label:'Date Of Birth',name:'dob',type:'date',required:true},
    {label:'Martial Status',name:'martialStatus',type:'string',required:true,select:true,selectList:["Married","Single","Divorced","Widow/widower"]},
    {label:'Phone Number',name:'phoneNumber',type:'number',required:true},
    {label:'Email',name:'email',type:'email',required:true},
    {label:'Password',name:'password',type:'password',required:true},
    {label:'City',name:'city',type:'email',required:true},
    {label:'Street Address',name:'streetAddress',type:'email',required:true},
    {label:'Postal Code',name:'postalCode',type:'email'},
]
const educationData=[
    {label:'Degree Name',name:'degreeName',type:'string',required:true},
    {label:'University Name',name:'universityName',type:'string',required:true},
    {label:'Years of Qualification',name:'yearsOfQualification',type:'number',required:true},
]

const clinicData=[
    {label:"Clinic Name",name:"clinicName",type:"string",required:true},
    {label:"Clinic Contact",name:"clinicContact",type:"number",required:true},
    {label:"Clinic Email Address",name:"clinicEmailAddress",type:"string",},
    {label:"Clinic Website",name:"clinicWebsite",type:"string"},
    {label:"Clinic City",name:"clinicCity",type:"string",required:true},
    {label:"Clinic Address",name:"clinicAddress",type:"string",required:true},
]
const hospitalData=[
    {label:"Hospital Name",name:"hospitalName",type:"string",required:true},
    {label:"Hospital Contact",name:"hospitalContact",type:"number",required:true},
    {label:"Hospital Email Address",name:"hospitalEmailAddress",type:"string",},
    {label:"Hospital Website",name:"hospitalWebsite",type:"string"},
    {label:"Hospital City",name:"hospitalCity",type:"string",required:true},
    {label:"Hospital Address",name:"hospitalAddress",type:"string",required:true},
]
const Timings=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const ProffessionData=[
    {label:"Platinium Membership",name:"platMember",type:"string",required:true ,select:true,selectList:["Yes","No"]},
    {label:"Online Consultation Fees",name:"platConsultFees",type:"number",required:true},
]

export {personalInfoData,educationData, clinicData,hospitalData,Timings,ProffessionData};