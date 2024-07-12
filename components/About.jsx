import React from 'react'
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Phone, PhoneCallIcon} from 'lucide-react'
import DevImg from './DevImg';

const infoData = [
  {
    icon: <User2 size={20}/>,
    text: 'Ikenna James'
  },
  {
    icon: <PhoneCall size={20}/>,
    text: '08149661102'
  },
  {
    icon: <MailIcon size={20}/>,
    text: 'ikennajames03@gmail.com'
  },
  {
    icon: <Calendar size={20}/>,
    text: 'Born on 10th Dec,1996'
  },
  {
    icon: <GraduationCap size={20}/>,
    text: 'AGRICULTURE(ANIMAL SCIENCE)'
  },
  {
    icon: <HomeIcon size={20} 
    // style={{marginBottom:"30px"}}
    />,
    text: (<div>Off Redeem Bus-Stop,Obawole,Iju-ishaga,Lagos State</div>)
  },
]

const qaulificationData = [
  {
    title: 'education',
    data:[
      {
        university:'Delta State University',
        qualification: 'B.Sc in Agriculture(Animal Science)',
        years: '2017 - 2021',
      },
      {
        university:'Semi-Colon Africa',
        qualification: 'Soft Engineer',
        years: '2023 - 2024',
      },

    ]
  },
  {
    title: 'experience',
    data:[
      {
        company:'finoplastic ',
        role: 'Quality Assurance',
        years: '2022-2023',
      },
      {
        company:'Semi-Colon Africa',
        role: 'Software Engineer(FrontEnd Engineer)',
        years: '2024 -present',
      },

    ]
  }
  
]
 
const skillData = [
  {
    title: 'Skills',
    data:[
      {
        skill: 'HTML',
        percentage: '90%',
      },
      {
        skill: 'CSS',
        percentage: '85%',
      },
      {
        skill: 'Javascript',
        percentage: '80%',
      },
      {
        skill: 'React',
        percentage: '75%',
      },
      {
        skill: 'React Native',
        percentage: '70%',
      },
      {
        skill: 'Next.js',
        percentage: '50%',
      },
      {
        skill: 'Tailwind CSS',
        percentage: '65%',
      },
      {
        skill: 'Redux',
        percentage: '60%',
      },
      {
        skill: 'Java',
        percentage: '70%',
      },
      {
        skill: "python",
        percentage:"40%"
      },
      {
         skill: "Spring boot",
         percentage:"60%"
      },
      {
        skill: 'Front-end DEvelopment',
        percentage: '70%',
      },
      {
        skill: 'Back-end Development',
        percentage: '70%',
      }
    ]
  },
  {
    title: 'Tools',
    data:[
      {
       imgPath: '/about/vscod.jpeg'
      }, {
        imgPath: '/about/pycharm.jpg'
       },
       {
        imgPath: '/about/intellij.jpeg'
       },
      {
        imgPath: '/about/mongodb.jpg'
       },

      {
        imgPath: '/about/mysql.png'
       },
       {
        imgPath: '/about/wps.png'
       },
       {
        imgPath: '/about/figma.png'
       },
     
    ]
  }
]
const About = () => {
 const getData = (arr, title) => {
   return arr.find((item) => item.title === title)
 }
//  h-[84vh]
 console.log(getData(qaulificationData,'experience'))
  return (
    <section className="xl:h-[980px]  pb-12 xl:py-24 dark:bg-none bg-plain">
    <div className="container mx-auto">
      <h2 className="section-title mb-18 xl:mb-16 text-center mx-auto relative top-2">About me</h2>
      <div className="lg:hidden mb-12 mx-auto flex justify-center">
          <DevImg 
          containerStyles='w-[200px] h-[200px] bg-no-repeat relative bg-bottom rounded-full'
          imgSrc='/hero/my.jpeg'
          style='bg-hero_shape dark:bg-hero_shape_dark w-[580px] h-[580px] bg-no-repeat relative bg-bottom rounded-full mt-10'
          />
          </div>
   <div className='flex flex-col xl:flex-row'>
    <div 
   
    className="bg-hero_shape dark:bg-hero_shape_dark dark:h-[640px] w-[605px] h-[605px] bg-no-repeat  bg-cover hidden xl:flex flex-1 relative"
    >
      <DevImg
      style=' rounded-full '
       imgSrc='/hero/my.jpeg'
      containerStyles='h-[405px] w-[405px] bg-no-repeat relative bg-cover'
      />
    </div>
    <div className='flex-1 mt-6'>
        <Tabs defaultValue = 'personal'>
            <TabsList className='gap-x-5 w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
         <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
         <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
         <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
            </TabsList>
        <div className='text-lg mt-12 xl:mt-8'>
            <TabsContent value='personal'>
            <div className='text-center xl:text-left'>
             <h3 className='h3 mb-4'>An Outstanding operational excellence</h3>   
            <p className='subtitle max-w-xl max-auto xl:mx-0'>   
            A dedicated and highly motivated software engineer with 1 year of experience in full-stack development. Proven ability to develop and maintain software applications, collaborate effectively with cross-functional teams, and solve complex technical problems. Adept at using modern development tools and methodologies to deliver high-quality code and exceptional user experiences.
            </p> 
            <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                {
                infoData.map((item,index) => {
                    return (
                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                     <div className='text-primary'>{item.icon}</div>
                     <div>{item.text}</div>
                        </div> 
                    )
                })
                }
            </div>
            <div className='flex flex-col gap-y-2'>
            <div className='text-primary'>
                Language Skills
            </div>
            <div className='border-b border-border border-gray-600'></div>
            <div>English</div>
            </div>
            </div>
            </TabsContent>
            <TabsContent value='qualifications'>
               <h3 className='h3 mb-8 text-center xl:text-left'>My extraordinary expedition</h3>
               <div className='grid md:grid-cols-2 gap-y-8'>
               <div className='flex flex-col gap-y-6'>
                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                  <Briefcase/>
                  <h4 className='capitalize font-medium'>
                    {getData(qaulificationData,'experience').title}
                  </h4>
                </div>
                <div className='flex flex-col gap-y-8'>
                  {getData(qaulificationData,'experience').data.map((item,index) =>{
                    const {company,role,years} = item;
                    return (
                      <div key={index} 
                      className='flex gap-x-8 group '
                      >
                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                          <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all'></div>
                        </div>
                        <div>
                          <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                          <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                          <div className='text-base font-medium'>{years}</div>
                        </div>
                        </div>
                    )
                  })}
                </div>
               </div>
               <div className='flex flex-col gap-y-6'>
               <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                  <GraduationCap size={28}/>
                  <h4 className='capitalize font-medium'>
                    {getData(qaulificationData,'education').title}
                  </h4>
                </div>
                <div className='flex flex-col gap-y-8'>
                  {getData(qaulificationData,'education').data.map((item,index) =>{
                    const {university,qualification,years} = item;
                    return (
                      <div key={index} 
                      className='flex gap-x-8 group '
                      >
                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                          <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all'></div>
                        </div>
                        <div>
                          <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                          <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                          <div className='text-base font-medium'>{years}</div>
                        </div>
                        </div>
                    )
                  })}
                </div>
               </div>
               </div>
                </TabsContent>
            <TabsContent value='skills'>
              <div className='text-center xl:text-left'>
              <h3 className='h3 mb-8'>Essential tools in my daily workflow</h3>
              <div className='mb-16'>
                <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                <div className='border-b border-border mb-4 border-gray-300'></div>
                <div>
                  {
                    getData(skillData, 'Skills').data.map((item,index) => {
                      const {skill,percentage} = item;
                      return <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 flex xl:justify-start justify-center gap-x-6'>
                       
                        <div className='font-medium'>{skill}</div>
                        <div className='font-medium xl:right-[63%] xl:left-[63%] xl:absolute text-primary'>{percentage}</div>
                        
                        </div>
                    })
                  }
                </div>
              </div>
              <div>
                <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                <div className='border-b border-border mb-4 border-gray-300'></div>
                <div className='flex justify-center xl:justify-start gap-x-8'>
                  {getData(skillData,"Tools").data.map((item,index) =>{
                    const {imgPath} = item;
                    return <div key={index}>
                      <Image
                      src={imgPath}
                      width={48}
                      height={48}
                      alt=''
                      priority
                      />
                    </div>
                  })}
                </div>
              </div>
              </div>
            </TabsContent>
        </div>
        </Tabs>
    </div>
    </div>
    </div>
    </section>
  )
}

export default About