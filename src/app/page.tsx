import { getPersonalInformation } from "@/actions";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default async function Home() {
  // const { theme } = useTheme();
  //const informations=await getPersonalInformation();
  const  {educations,experiences,summary,phone,email,dateOfBirth,education,address,name,skills}=await getPersonalInformation(); 
 

  return (
    <main className="w-full max-md:max-w-screen flex  mb-16 flex-col items-center justify-between p-10 md:p-24">
      <Hero />
      <About summary={summary} educations={educations} experiences={experiences}
              phone={phone} email={email} dateOfBirth={dateOfBirth} education={education}
               address={address} name={name} skills={skills}
      />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
