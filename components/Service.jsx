import {GanttChartSquare, Blocks, Gem} from "lucide-react"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"

const servicesData=[
    {
        icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
        title:'Web Development',
        description: 'I specialize in creating and maintaining websites, ensuring optimal performance, user experience, and functionality. With a strong foundation in both front-end and back-end technologies, I build responsive, dynamic, and visually appealing web applications tailored to meet client needs and industry standards.'
    },
    {
        icon:<Gem size={72} strokeWidth={0.8}/>,
        title:'Mobile Development',
        description: 'I design and develop mobile applications for various platforms, ensuring seamless performance and user-friendly interfaces. With expertise in both iOS and Android development, I create intuitive and feature-rich apps that provide an engaging and efficient user experience, while leveraging the latest technologies and best practices in mobile development.'
    },
    {
        icon:<Blocks size={72} strokeWidth={0.8}/>,
        title:'App Development',
        description: 'I develop innovative and efficient applications across multiple platforms, focusing on functionality, user experience, and performance. With a strong background in both mobile and web app development, I create robust, scalable, and user-friendly apps tailored to meet the specific needs of clients and end-users, utilizing the latest technologies and industry best practices.'
    }
]

const Service = () => {
  return (
    <section className='h-[1750px] xl:h-[900px] xl:h dark:bg-none bg-plain'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto h-32'>My Services</h2>
            <div className='grid xl:grid-cols-3 justify-center gap-y-28 xl:gap-y-24 xl:gap-x-8'>
                {
                    servicesData.map((item, index) => {
                        const {icon, title, description} = item;
                        return <Card key={index} 
                        className='w-full max-w-[424px] h-[420px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                        >
                            <CardHeader className='text-primary absolute xl:-top-[60px] -top-[95px]'>
                                <div className='w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center'>{icon}</div>
                                
                            </CardHeader>
                            <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{title}</CardTitle>
                                <CardDescription className='text-lg'>{description}</CardDescription>
                            </CardContent>
                        </Card>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Service