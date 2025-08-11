import { Synthara } from "../views/Project/content/Synthara"
import { AsBelowSoAbove } from "../views/Project/content/AsBelowSoAbove"
import { TheMagicBox } from "../views/Project/content/TheMagicBox"
import { Juliette } from "../views/Project/content/Juliette"
import { Invocation } from "../views/Project/content/Invocation"
import { Irmajoanne } from "../views/Project/content/Irmajoanne"
import { SoberaniaCreativa } from "../views/Project/content/SoberaniaCreativa"

export const cocreationsList = [
    { 
        slug: 'the-magic-box',
        category: 'cocreation',
        title: 'The Magic Box',
        thumbnailClass: 'border-texture row-start-2 row-end-4 col-start-1 col-end-3',
        thumbnail: {
            src: '/projects/the-magic-box/thumbnail.webp',
            thresholdWhite: 0.5,
            thresholdGray: 0.2,
            noise: 1.25,
            labelClass: 'label bottom-3 left-3'
        },
        hero: {
            src: '/projects/the-magic-box/hero.webm',
            thresholdWhite: 0.2,
            thresholdGray: 0.2
        },
        videoURL: 'https://vimeo.com/908160267',
        heroImage: '/projects/the_magic_box_preview.jpg',
        intro: (<>
                <p>
                The Magic Box is an original project by <a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Xueh Magrini Troll</a>. People are invited to sit in front of a mysterious, handmade box and have a personal conversation with it. Xueh is listening from behind creating a unique drawing inspired by what she heard.
                </p>
                <p>
                    The Futuristic Wisdom Edition builds on this idea by turning the Magic Box into a talking oracle. Instead of speaking with Xueh, visitors ask questions directly to the box. Their voice is recorded, transcribed, and sent to an AI system, offering playful and witty replies.
                </p>
                <p>
                    This version was built using TouchDesigner and combines sculpture, voice interaction, and artificial intelligence to create a playful and mysterious experience.
                </p>
        </>
                ),
        info: [
            { header: 'Artist', list: [<a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Xueh Magrini Troll</a>] },
            { header: 'Tech', list: ['TouchDesigner', 'OpenAI', 'Python'] },
            { header: 'Type', list: ['Interactive Installation'] }
        ],
        body: <TheMagicBox />,
        credits: [
            <>Presented at <a className="underline" href="https://raw-skpz.de/bwh/">Beamtenwohnhaus Open Studios 2023</a></>,
            <>Concept & Sculpture / <a className="underline" href="https://raw-skpz.de/bwh/">Xueh Magrini Troll</a></>,
            <>Interaction Design & Generative Visuals / Ramses Salas</>
        ]
    },
    { 
        slug: 'juliette',
        category: 'cocreation',
        title: 'Juliette',
        thumbnailClass: 'border-texture row-start-1 row-end-4 col-start-3 col-end-3',
        thumbnail: {
            src: '/projects/juliette/thumbnail.webp',
            thresholdWhite: 0.8,
            thresholdGray: 0.5,
            noise: 1.25,
            labelClass: 'label top-3 left-3'  
        },
        videoURL: 'https://vimeo.com/371266714',
        hero: {
            src: '/projects/juliette/Juliette_hero_animation.webm',
            thresholdWhite: 0.2,
            thresholdGray: 0.2
        },
        intro: (
            (<>
                <p>
                    Juliette is a biomorphic art installation that explores what it means to be an object of desire. Combining sculpture, projection, and motion tracking, Juliette responds in real time to the presence of viewers.
                </p>
                <p>
                    As people come closer, her reactions intensify; she breathes, moans, and eventually reaches climax, but only when someone is near enough. This dependency on closeness turns desire into something physical and interactive.
                </p>
                <p>
                    Created in collaboration with <a className="underline" href="https://www.iriadocastelo.com/" target="_blank" rel="noopener noreferrer">Iria do Castelo</a>, who sculpted her bodily form, Juliette comes alive through Unity and real-time motion sensors.
                </p>
                <p>
                    Juliette may be an object, but she cannot climax alone. She needs to be seen, approached, felt. Her pleasure depends on others, exposing the vulnerability beneath objectification and the longing for recognition at the heart of desire.
                </p>
                </>
                )
        ),
        info: [
            { header: 'Artist', list: [<a className="underline" href="https://www.iriadocastelo.com/" target="_blank" rel="noopener noreferrer">Iria do Castelo</a>] },
            { header: 'Tech', list: ['Unity', 'NVIDIA FleX', 'C#'] },
            { header: 'Type', list: ['Interactive Installation'] }
        ],
        body: <Juliette />,
        credits: [
            <><a href="https://somos-arts.org/un_real-desires-group-exhibition/" className="underline" target="_blank" rel="noopener noreferrer">Un_Real Desires 2019</a> group exhibition at <a href="https://somos-arts.org/" className="underline" target="_blank" rel="noopener noreferrer">SomoS Art House Berlin</a></>,
            <>Concept & Sculpture / <a className="underline" href="https://www.iriadocastelo.com/" target="_blank" rel="noopener noreferrer">Iria do Castelo</a></>,
            <>Interaction Design, Projection Mapping & Generative Visuals / Ramses Salas</>
        ]
    },
    { 
        slug: 'synthara',
        category: 'cocreation',
        title: 'Synthara',
        thumbnailClass: 'row-start-3 row-end-5 col-start-1 col-end-4',
        thumbnail: {
            src: '/projects/synthara/thumbnail.webp',
            thresholdWhite: 0.6,
            thresholdGray: 0.4,
            noise: 1.25,
            labelClass: 'label top-24 right-4' 
        },
        hero: {
            src: '/projects/synthara/hero.webm',
            thresholdWhite: 0.25,
            thresholdGray: 0.25
        },
        videoURL: 'https://vimeo.com/864873849',
        heroImage: '/projects/synthara_preview.png',
        intro: (
            <>
                <p>
                        Synthara is an interactive installation that explores the intersection of organic and synthetic life. A 3D printed mountain landscape houses glowing kombucha scoby deposits that react to human movement.
                    </p>
                    <p>
                        Visitors interact with the piece through motion sensors, triggering ripples of color and ambient sound projected in real-time using TouchDesigner.
                    </p>
                    <p>
                        The concept and artistic direction were developed in collaboration with <a className="underline" href="https://nataliadlh.com/" target="_blank" rel="noopener noreferrer">Natalia de León Hernandez</a>, whose vision shaped the world of Synthara, blending ecological symbolism with speculative design.
                    </p>
                    <p>
                        This project brings together digital fabrication, biomaterials, generative visuals, and interactive systems to imagine a future where nature and technology evolve together.
                    </p>
            </>
        ),
        info: [
            { header: 'Artist', list: [<a className="underline" href="https://nataliadlh.com/" target="_blank" rel="noopener noreferrer">Natalia de León Hernández</a>] },
            { header: 'Tech', list: ['Blender', 'TouchDesigner', 'GLSL'] },
            { header: 'Type', list: ['Interactive Installation'] }
        ],
        body: <Synthara />,
        credits: [
            <>Presented at <a href="https://www.instagram.com/consciousmadness_official" className="underline" target="_blank" rel="noopener noreferrer">Concious Madness Festival 2023</a></>,
            <>Concept & 3D Modeling / <a className="underline" href="https://nataliadlh.com/" target="_blank" rel="noopener noreferrer">Natalia de León Hernández</a></>,
            <>Interaction Design, Projection Mapping & Fabrication / Ramses Salas </>,
        ]
    },
    { 
        slug: 'as-below-so-above',
        category: 'cocreation',
        title: 'As Below So Above',
        thumbnailClass: 'border-texture row-start-5 col-start-1 row-span-2',
        thumbnail: {
            src: '/projects/as-below-so-above/thumbnail.webp',
            thresholdWhite: 0.5,
            thresholdGray: 0.4,
            noise: 1.25,
            labelClass: 'label top-3 left-3' 
        },
        videoURL: 'https://vimeo.com/791477640',
        hero: {
            src: '/projects/as-below-so-above/hero.webm',
            thresholdWhite: 0.4,
            thresholdGray: 0.4
        },
        intro: (
            <>
                <p>
                    As Below, So Above is an immersive exhibition where nature and technology exist in the same space. Organic textures and technological creations are brought together to create a sensory experience that moves between the microscopic and the perceived physical.
                </p>
                <p>
                    Inspired by Hermetic philosophy and the phrase “As above, so below”, the project reflects on the idea that everything in the universe, from the atomic to the cosmic, is made of the same fundamental matter. The experience invites visitors to zoom in and out and question how we relate to both nature and technology in a shared, encoded reality.
                </p>
                <p>
                    The exhibition blends digital projections, sound, and physical elements to explore how we understand the world around us. Whose utopia, whose dystopia?
                </p>
            </>
        ),
        info: [
            { header: 'Artist', list: [
                <a className="underline" href="https://juanguerrero.de/" target="_blank" rel="noopener noreferrer">Juan Guerrero</a>, 
                <a className="underline" href="https://nataliadlh.com/" target="_blank" rel="noopener noreferrer">Natalia de León Hernández</a>, 
                <a className="underline" href="https://de.linkedin.com/in/nathaly-al-gindi-607206156/de" target="_blank" rel="noopener noreferrer">Nathaly Al Gindi</a>,
            ] },
            { header: 'Tech', list: ['TouchDesigner'] },
            { header: 'Type', list: ['Interactive Installation', 'Performance'] }
        ],
        body: <AsBelowSoAbove />,
        credits: [
            <><a className="underline" href="https://www.instagram.com/p/CW565AIM1VW/?hl=en" target="_blank" rel="noopener noreferrer">Aa Below So Above 2021</a> collective exhibition at <a className="underline" href="https://www.instagram.com/willowsp_/?hl=en" target="_blank" rel="noopener noreferrer">Willow Gallery</a></>,
            <>Generative Design & Sculptures / <a className="underline" href="https://nataliadlh.com/" target="_blank" rel="noopener noreferrer">Natalia de León Hernández</a></>,
            <>Paintings, Floor & Sound Design / <a className="underline" href="https://juanguerrero.de/" target="_blank" rel="noopener noreferrer">Juan Guerrero</a></>,
            <>Live Concert / <a className="underline" href="https://de.linkedin.com/in/nathaly-al-gindi-607206156/de" target="_blank" rel="noopener noreferrer">Nathaly Al Gindi</a></>,
            <>Interaction Design, Projection Mapping & Generative Visuals / Ramses Salas</>,
        ]
    }, 
    { 
        slug: 'invocation',
        category: 'cocreation',
        title: 'Invocation',
        thumbnailClass: 'border-texture row-start-5 col-span-2',
        thumbnail: {
            src: '/projects/invocation/thumbnail.webp',
            thresholdWhite: 0.16,
            thresholdGray: 0.8,
            noise: 1.25,
            labelClass: 'label bottom-3 left-3' 
        },
        videoURL: 'https://vimeo.com/377457311',
        heroImage: '/projects/invocation_preview.jpg',
        hero: {
            src: '/projects/invocation/invocation_hero_animation.webm',
            thresholdWhite: 0.2,
            thresholdGray: 0.2
        },
        intro: (
            <>
                <p>
                    Invocation is a live audiovisual experiment developed with OpenFrameworks and a motion sensor.
                </p>
                <p>
                    Using head and hand tracking, <a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Xueh Magrini Troll</a> manipulates a generative light structure in real time. The algorithm simulates organic growth, producing an evolving abstract form.
                </p>
                <p>
                    Movement data drives rotation and translation of the visuals. Live audio input modulates the graphics, adding effects such as pulses and flickers.
                </p>
                <p>
                    The piece explore the relationship between movement, sound, and light.
                </p>
            </>
        ),
        info: [
            { header: 'Artist', list: [<a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Xueh Magrini Troll</a>] },
            { header: 'Tech', list: ['OpenFrameworks', 'C++'] },
            { header: 'Type', list: ['Interactive Installation'] }
        ],
        body: <Invocation />,
        credits: [
            <>Choreography / <a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Xueh Magrini Troll</a></>,
            <>Interaction Design & Generative Visuals / Ramses Salas </>,
        ]
    },
    { 
        slug: 'soberania-creativa',
        category: 'client',
        title: 'Soberania Creativa',
        thumbnailClass: 'border-texture row-start-5 col-span-2',
        thumbnail: {
            src: '/projects/soberania-creativa/thumbnail.webp',
            thresholdWhite: 0.8,
            thresholdGray: 0.5,
            noise: 1.25,
            labelClass: 'top-3 left-5' 
        },
        hero: {
            src: '/projects/soberania-creativa/hero.webm',
            thresholdWhite: 0.3,
            thresholdGray: 0.3
        },
        intro: (
            <>
                <p>
                    Soberanía Creativa is a platform dedicated to somatic-spiritual healing through creative expression.
                </p>
                <p>
                    Designed and implemented in WordPress, the site was envisioned as a digital oasis for reading and learning. It offers a familiar space that invites reflection and exploration.
                </p>
                <p>
                    It reflects the vision of Paloma Todd Montes, an artist and facilitator whose work arises from a personal landscape of exile, hybridity, and embodied memory. The site showcases her illustrations, portfolio, blog, and podcast, offering a window into her creative world.
                </p>
                <p>
                    Rooted in ancestral wisdom, narrative sovereignty, and the cyclical mystery of the body, the platform provides a grounded and responsive experience that holds space for oral and embodied storytelling.
                </p>
            </>
        ),
        info: [
            { header: 'Client', list: [<a className="underline" href="https://www.instagram.com/_soberaniacreativa" target="_blank" rel="noopener noreferrer">Paloma Todd Montes</a>] },
            { header: 'Tech', list: ['Wordpress', 'Javascript', 'PHP'] },
            { header: 'Type', list: ['Website', <a className="underline" href="https://soberaniacreativa.com/" target="_blank" rel="noopener noreferrer">Visit Website &#8594;</a>] }
        ],
        body: <SoberaniaCreativa />,
        credits: [
            <>Branding & Marketing / <a className="underline" href="https://bio.site/ecoscomunicacion" target="_blank" rel="noopener noreferrer">Carolina Olmos</a></>,
            <>Web Design & Development / Ramses Salas </>,
        ]
    },
    { 
        slug: 'irmajoanne',
        category: 'client',
        title: 'Irmajoanne',
        thumbnailClass: 'border-texture row-start-5 col-span-2',
        thumbnail: {
            src: '/projects/irmajoanne/thumbnail.webp',
            thresholdWhite: 0.8,
            thresholdGray: 0.2,
            noise: 1.25,
            labelClass: 'top-3 right-5' 
        },
        hero: {
            src: '/projects/irmajoanne/hero.webm',
            thresholdWhite: 0.25,
            thresholdGray: 0.25
        },
        intro: (
            <>
                <p>
                    Irma Joanne is an interdisciplinary artist based in Rotterdam. Her work focuses on the human body and how we experience it through both physical and psychological states.
                </p>
                <p>
                    This portfolio, built with React and Three.js, showcases her installations, performances, and collaborations across visual art, theater, and festivals.
                </p>
                <p>
                    Irma works with plaster body casts and video projections to create life-sized figures that question what it means to live in a body. Her research looks at how the separation of body and mind in science and culture affects our sense of self.
                </p>
                <p>
                    By freezing the body in material and layering it with moving images, she explores how people react to their own physical form.
                </p>
            </>
        ),
        info: [
            { header: 'Client', list: [<a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Irma Joanne</a>] },
            { header: 'Tech', list: ['React', 'Three.js', 'Contentful CMS'] },
            { header: 'Type', list: ['Website', <a className="underline" href="https://www.irmajoanne.com/" target="_blank" rel="noopener noreferrer">Visit Website &#8594;</a>] }
        ],
        body: <Irmajoanne />,
        credits: [
            <>Photography / <a className="underline" href="https://www.instagram.com/xuehka" target="_blank" rel="noopener noreferrer">Irmajoanne</a></>,
            <>Web Design & Development / Ramses Salas </>,
        ]
    }
]

export const getProjectsByCategory = (category: string) => cocreationsList.filter(project => project.category === category)

export const getProjectCategoryLabel = (category: string) => {
    switch (category) {
        case 'cocreation':
            return 'Co-Creation'
        case 'client':
            return 'Client Work'
        default:
            return 'Undefined'
    }
}

export const getCocreationBySlug = (slug: string) => cocreationsList.find(cocreation => cocreation.slug === slug)

export const getNextCocreationBySlug = (slug: string) => {
    const currentIndex = cocreationsList.findIndex(cocreation => cocreation.slug === slug)
    if(currentIndex + 1 < cocreationsList.length) return cocreationsList[currentIndex + 1]
    return cocreationsList[0]
}

export const getPreviousCocreationBySlug = (slug: string) => {
    const currentIndex = cocreationsList.findIndex(cocreation => cocreation.slug === slug)
    if(currentIndex - 1 >= 0) return cocreationsList[currentIndex - 1]
    return cocreationsList[cocreationsList.length - 1]
}