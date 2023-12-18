import React from 'react'
import classes from './Home.module.css'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"
const Disease = () => {
  return (
    <div class="col-md-12 symptoms-container-carousel carousel d-flex horizontal-scroll smart-bar">
            <ScrollAnimation
            animateIn={"fadeInDown"}
            // delay={300}
          >

            <p style={{textAlign:"left",fontSize:"24px",marginBottom:"20px",fontWeight:"600"}} className={classes.head}>Diseases</p>
          </ScrollAnimation>


    <div class="symptoms-sections" style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={100}
          ><div data-disease-name="Denguefever" data-disease-slug="dengue-fever" class=" disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/dengue-fever.avif" width="77px;" height="76px" alt="dengue-fever"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium font-sm-base">Dengue fever</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={200}
          ><div data-disease-name="Piles" data-disease-slug="typhoid-fever" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/typhoid-fever.avif" width="77px;" height="76px" alt="typhoid-fever"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium font-sm-base">Typhoid Fever</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={400}
          ><div data-disease-name="Piles" data-disease-slug="piles" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/piles.png" width="77px;" height="76px" alt="piles"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium font-sm-base">Piles</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={600}
          ><div data-disease-name="Gastritis" data-disease-slug="gastritis" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/gastritis.png" width="77px;" height="76px" alt="gastritis"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium overflow-dotted font-sm-base">Gastritis</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={800}
          ><div data-disease-name="Hernia" data-disease-slug="hernia" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/hernia.png" width="77px;" height="76px" alt="hernia"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium font-sm-base">Hernia</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={1000}
          ><div data-disease-name="VaginalInfection" data-disease-slug="vaginal-infection" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/vaginalinfection.png" width="77px;" height="76px" alt="vaginal infection"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium overflow-dotted font-sm-base">Vaginal Infection</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={1200}
          ><div data-disease-name="Migraine" data-disease-slug="migraine" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/migrain.png" width="77px;" height="76px" alt="migraine"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium font-sm-base">Migraine</p>
            </div>
        </div>
    </div></ScrollAnimation>
    <ScrollAnimation
            animateIn={"fadeInDown"}
            delay={1400}
          >
            <div data-disease-name="TB" data-disease-slug="tuberculosis" class="disease-home cursor-pointer">
        <div class="symptom-holders">
            <div class="symptom-image">
                <figure class="mb-0">
                    <img class="image-fluid avif-images" src="https://static.marham.pk/assets/images/home-new/tb.png" width="77px" height="76px" alt="typhoid-fever"/>
                </figure>
            </div>
            <div class="symptom-content">
                <p class="text-marham  text-base font-weight-medium font-sm-base">TB</p>
            </div>
        </div>
        </div></ScrollAnimation>
    </div>
</div>
  )
}

export default Disease