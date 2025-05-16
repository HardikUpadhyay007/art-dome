import { Artwork } from "../types";

export const artworks: Artwork[] = [
    {
        id: 1,
        title: "Starry Night",
        artist: "Vincent van Gogh",
        quote: "I dream of painting and then I paint my dream.",
        year: 1889,
        imageUrl:
            "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
        category: "Post-Impressionism",
        description:
            "This masterpiece depicts a night scene of a village with a prominent church spire outlined against a night sky. The sky is filled with swirling clouds, stars ablaze with luminescence, and a bright crescent moon.",
        medium: "Oil on canvas",
        dimensions: "73.7 cm × 92.1 cm",
    },
    {
        id: 2,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        quote: "I don't do drugs. I am drugs.",
        year: 1931,
        imageUrl:
            "https://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b",
        category: "Surrealism",
        description:
            "One of Dalí's most recognizable works, featuring melting pocket watches draped across a barren landscape. The soft watches represent the omnipresence of time and its mastery over all living things.",
        medium: "Oil on canvas",
        dimensions: "24.1 cm × 33 cm",
    },
    {
        id: 3,
        title: "Guernica",
        artist: "Pablo Picasso",
        quote: "Art is the lie that enables us to realize the truth.",
        year: 1937,
        imageUrl:
            "https://cdn.britannica.com/79/91479-050-24F98E12/Guernica-canvas-Pablo-Picasso-Madrid-Museo-Nacional-1937.jpg",
        category: "Cubism",
        description:
            "A powerful anti-war statement created in response to the bombing of Guernica, a Basque town in northern Spain, by Nazi Germany and Fascist Italy at the request of the Spanish Nationalists during the Spanish Civil War.",
        medium: "Oil on canvas",
        dimensions: "349.3 cm × 776.6 cm",
    },
    {
        id: 4,
        title: "The Scream",
        artist: "Edvard Munch",
        quote: "I painted to understand my own life.",
        year: 1893,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        category: "Expressionism",
        description:
            "The painting shows a figure with an agonized expression against a landscape with a tumultuous orange sky. It symbolizes the anxiety of the human condition.",
        medium: "Oil, tempera, pastel on cardboard",
        dimensions: "91 cm × 73.5 cm",
    },
    {
        id: 5,
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        quote: "A painting is complete when it has the shadows of a god.",
        year: 1642,
        imageUrl:
            "https://cdn.britannica.com/98/182298-050-ECE18F92/Frans-Banninck-Cocq-Militia-Company-of-District.jpg",
        category: "Dutch Golden Age",
        description:
            "This monumental painting depicts a group of civic guardsmen. It is renowned for its effective use of light and shadow (chiaroscuro) and perceived motion in what would typically be a static military portrait.",
        medium: "Oil on canvas",
        dimensions: "363 cm × 437 cm",
    },
    {
        id: 6,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        quote: "The best of artists has no conception that the marble alone does not contain within itself.",
        year: 1485,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/2560px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        category: "Renaissance",
        description:
            "The painting depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown. The painting is one of the most famous works of the Renaissance period.",
        medium: "Tempera on canvas",
        dimensions: "172.5 cm × 278.5 cm",
    },
    {
        id: 7,
        title: "The Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        quote: "The painter's task is to render the most beautiful appearance of things.",
        year: 1665,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
        category: "Dutch Golden Age",
        description:
            "Often referred to as 'the Dutch Mona Lisa', this portrait of a girl with an exotic dress and a pearl earring has become one of Vermeer's most famous works.",
        medium: "Oil on canvas",
        dimensions: "44.5 cm × 39 cm",
    },
    {
        id: 8,
        title: "Water Lilies",
        artist: "Claude Monet",
        quote: "I perhaps owe having become a painter to flowers.",
        year: 1919,
        imageUrl:
            "https://www.moma.org/media/W1siZiIsIjE2NDI5NyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=95f5affa2a4df262",
        category: "Impressionism",
        description:
            "Part of Monet's Water Lilies series, this painting depicts his flower garden at his home in Giverny. The paintings capture the changing light and atmosphere of the garden's pond throughout the day.",
        medium: "Oil on canvas",
        dimensions: "100 cm × 200 cm",
    },
    {
        id: 9,
        title: "American Gothic",
        artist: "Grant Wood",
        quote: "All the good ideas I ever had came to me while I was milking a cow.",
        year: 1930,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/1200px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        category: "Regionalism",
        description:
            "This iconic painting depicts a farmer standing beside his daughter (often misinterpreted as his wife). The figures are posed in front of a house with a distinctive Gothic-style window.",
        medium: "Oil on beaverboard",
        dimensions: "78 cm × 65.3 cm",
    },
    {
        id: 10,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        quote: "From the age of six I had a passion for copying the form of things.",
        year: 1831,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/2560px-Tsunami_by_hokusai_19th_century.jpg",
        category: "Ukiyo-e",
        description:
            "This famous woodblock print depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. The wave is the most recognized work in Hokusai's series 'Thirty-six Views of Mount Fuji'.",
        medium: "Woodblock print",
        dimensions: "25.7 cm × 37.8 cm",
    },
    {
        id: 11,
        title: "The Kiss",
        artist: "Gustav Klimt",
        quote: "Art is a line around your thoughts.",
        year: 1908,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
        category: "Symbolism",
        description:
            "This painting depicts a couple embracing, their bodies entwined in elaborate, beautiful robes decorated in a style influenced by both linear constructs of the contemporary Art Nouveau style and the organic forms of the earlier Arts and Crafts movement.",
        medium: "Oil and gold leaf on canvas",
        dimensions: "180 cm × 180 cm",
    },
    {
        id: 12,
        title: "The Thinker",
        artist: "Auguste Rodin",
        quote: "The main thing is to be moved, to love, to hope, to tremble, to live.",
        year: 1902,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Thinker%2C_Rodin.jpg/800px-The_Thinker%2C_Rodin.jpg",
        category: "Modern Sculpture",
        description:
            "One of the most recognized sculptures in the world, it depicts a nude male figure sitting on a rock with his chin resting on his hand, deep in thought. It was originally part of a larger work called 'The Gates of Hell'.",
        medium: "Bronze",
        dimensions: "186 cm × 98 cm × 140 cm",
    },
    {
        id: 13,
        title: "The Sleeping Gypsy",
        artist: "Henri Rousseau",
        quote: "Nothing makes me so happy as to observe nature and to paint what I see.",
        year: 1897,
        imageUrl:
            "https://cdn.britannica.com/78/249478-050-CF656261/The-Sleeping-Gypsy-Henri-Rousseau-1897.jpg",
        category: "Post-Impressionism",
        description:
            "This painting depicts a woman asleep in a barren landscape with a lion beside her. The moon illuminates the scene with a surreal, dreamlike quality characteristic of Rousseau's work.",
        medium: "Oil on canvas",
        dimensions: "130 cm × 201 cm",
    },
    {
        id: 14,
        title: "Nighthawks",
        artist: "Edward Hopper",
        quote: "If you could say it in words, there would be no reason to paint.",
        year: 1942,
        imageUrl:
            "https://www.artic.edu/iiif/2/831a05de-d3f6-f4fa-a460-23008dd58dda/full/843,/0/default.jpg",
        category: "American Realism",
        description:
            "This painting portrays people sitting in a downtown diner late at night. It is Hopper's most famous work and is one of the most recognizable paintings in American art.",
        medium: "Oil on canvas",
        dimensions: "84.1 cm × 152.4 cm",
    },
    {
        id: 15,
        title: "The Son of Man",
        artist: "René Magritte",
        quote: "Everything we see hides another thing, we always want to see what is hidden by what we see.",
        year: 1964,
        imageUrl:
            "https://www.renemagritte.org/assets/img/paintings/son-of-man.jpg",
        category: "Surrealism",
        description:
            "This painting depicts a man in a suit and bowler hat with his face obscured by a floating green apple. It is one of Magritte's most famous works and is often interpreted as a self-portrait.",
        medium: "Oil on canvas",
        dimensions: "116 cm × 89 cm",
    },
    {
        id: 16,
        title: "Campbell's Soup Cans",
        artist: "Andy Warhol",
        quote: "Art is what you can get away with.",
        year: 1962,
        imageUrl:
            "https://www.moma.org/media/W1siZiIsIjMxODI0MiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a47712cc64da090",
        category: "Pop Art",
        description:
            "This work consists of thirty-two canvases, each depicting a different variety of Campbell's Soup. It is considered a landmark work in Pop Art and a commentary on mass production and consumerism in American society.",
        medium: "Synthetic polymer paint on canvas",
        dimensions: "50.8 cm × 40.6 cm (each)",
    },
    {
        id: 17,
        title: "Café Terrace at Night",
        artist: "Vincent van Gogh",
        quote: "I put my heart and soul into my work, and have lost my mind in the process.",
        year: 1888,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/800px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
        category: "Post-Impressionism",
        description:
            "This painting depicts a colorful café terrace at night, illuminated by artificial light. It is one of the first paintings where Van Gogh used starry backgrounds, which would later become a prominent element in his most famous works.",
        medium: "Oil on canvas",
        dimensions: "80.7 cm × 65.3 cm",
    },
    {
        id: 18,
        title: "Impression, Sunrise",
        artist: "Claude Monet",
        quote: "Everyone discusses my art and pretends to understand, as if it were necessary to understand, when it is simply necessary to love.",
        year: 1872,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg",
        category: "Impressionism",
        description:
            "This painting depicts the harbor of Le Havre at sunrise, with a vibrant orange sun against a hazy blue-gray background. It gave the Impressionist movement its name when a critic used the term as an insult after seeing the work at an exhibition.",
        medium: "Oil on canvas",
        dimensions: "48 cm × 63 cm",
    },
    {
        id: 19,
        title: "The Garden of Earthly Delights",
        artist: "Hieronymus Bosch",
        quote: "The difference between false memories and true ones is the same as for jewels: it is always the false ones that look the most real, the most brilliant.",
        year: 1490,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1200px-The_Garden_of_earthly_delights.jpg",
        category: "Northern Renaissance",
        description:
            "This triptych depicts the Garden of Eden, a fantastical landscape filled with nude figures, mythical creatures, and oversized fruit and birds, and finally a vision of Hell. It is known for its surreal imagery and complex symbolism.",
        medium: "Oil on oak panels",
        dimensions: "220 cm × 389 cm",
    },
    {
        id: 20,
        title: "No. 5, 1948",
        artist: "Jackson Pollock",
        quote: "Every good painter paints what he is.",
        year: 1948,
        imageUrl:
            "https://www.jackson-pollock.org/assets/img/paintings/number-5.jpg",
        category: "Abstract Expressionism",
        description:
            "This painting is an example of Pollock's drip painting technique, where he would drip and splash paint onto a canvas placed on the floor. It consists of brown and yellow paint drizzled over a fibreboard surface.",
        medium: "Oil on fiberboard",
        dimensions: "243.8 cm × 121.9 cm",
    },
    {
        id: 21,
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        quote: "Simplicity is the ultimate sophistication.",
        year: 1498,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1200px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
        category: "High Renaissance",
        description:
            "This mural painting depicts the scene of the Last Supper of Jesus with his apostles before his crucifixion. It captures the moment when Jesus has just announced that one of his apostles will betray him.",
        medium: "Tempera on gesso, pitch, and mastic",
        dimensions: "460 cm × 880 cm",
    },
    {
        id: 22,
        title: "The Arnolfini Portrait",
        artist: "Jan van Eyck",
        quote: "I do as well as I can.",
        year: 1434,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/800px-Van_Eyck_-_Arnolfini_Portrait.jpg",
        category: "Northern Renaissance",
        description:
            "This portrait is believed to depict the Italian merchant Giovanni Arnolfini and his wife. It is noted for its intricate details, complex iconography, and innovative use of the mirror to show the space beyond the picture frame.",
        medium: "Oil on oak panel",
        dimensions: "82.2 cm × 60 cm",
    },
    {
        id: 23,
        title: "Les Demoiselles d'Avignon",
        artist: "Pablo Picasso",
        quote: "Everything you can imagine is real.",
        year: 1907,
        imageUrl:
            "https://www.moma.org/media/W1siZiIsIjQzODQ1MiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=c96b77818fd18af6",
        category: "Proto-Cubism",
        description:
            "This painting depicts five nude female prostitutes from a brothel on Carrer d'Avinyó in Barcelona. It is renowned for its radical break with traditional composition and perspective, and is considered one of the most influential works in the development of modern art.",
        medium: "Oil on canvas",
        dimensions: "243.9 cm × 233.7 cm",
    },
    {
        id: 24,
        title: "Ophelia",
        artist: "John Everett Millais",
        quote: "The only real happiness lies in the pursuit of a purpose.",
        year: 1851,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg/2560px-John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
        category: "Pre-Raphaelite",
        description:
            "This painting depicts Ophelia, a character from Shakespeare's play Hamlet, floating in a river before she drowns. The painting is known for its detailed and botanically accurate depiction of the riverbank foliage.",
        medium: "Oil on canvas",
        dimensions: "76.2 cm × 111.8 cm",
    },
    {
        id: 25,
        title: "The Raft of the Medusa",
        artist: "Théodore Géricault",
        quote: "The truly creative mind in any field is no more than this: A human creature born abnormally, inhumanely sensitive.",
        year: 1819,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1200px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
        category: "Romanticism",
        description:
            "This painting depicts the aftermath of the wreck of the French naval frigate Méduse, which ran aground off the coast of today's Mauritania on July 2, 1816. At least 147 people were set adrift on a hastily constructed raft; all but 15 died in the 13 days before their rescue.",
        medium: "Oil on canvas",
        dimensions: "491 cm × 716 cm",
    },
    {
        id: 26,
        title: "The Card Players",
        artist: "Paul Cézanne",
        quote: "With an apple I will astonish Paris.",
        year: 1895,
        imageUrl:
            "https://collectionapi.metmuseum.org/api/collection/v1/iiif/435868/800382/main-image",
        category: "Post-Impressionism",
        description:
            "This painting is part of a series depicting Provençal peasants playing cards. Unlike earlier paintings of the genre, which typically show rowdy, drunken gamblers in taverns, Cézanne's card players are subdued and focused, giving the paintings a sense of timelessness and monumentality.",
        medium: "Oil on canvas",
        dimensions: "97 cm × 130 cm",
    },
    {
        id: 27,
        title: "The Weeping Woman",
        artist: "Pablo Picasso",
        quote: "Art is a lie that makes us realize truth.",
        year: 1937,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg",
        category: "Cubism",
        description:
            "This painting is one of several works Picasso created in response to the bombing of Guernica. It depicts a woman in anguish, with distorted, fragmented features characteristic of Picasso's Cubist style.",
        medium: "Oil on canvas",
        dimensions: "60 cm × 49 cm",
    },
    {
        id: 28,
        title: "Wanderer above the Sea of Fog",
        artist: "Caspar David Friedrich",
        quote: "The artist should not only paint what he sees before him, but also what he sees within him.",
        year: 1818,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
        category: "Romanticism",
        description:
            "This painting depicts a man standing upon a rocky precipice, his back to the viewer, gazing out over a landscape of mountains and mist. It is considered one of the masterpieces of Romanticism and has become an icon of the movement.",
        medium: "Oil on canvas",
        dimensions: "94.8 cm × 74.8 cm",
    },
    {
        id: 29,
        title: "The School of Athens",
        artist: "Raphael",
        quote: "When one is painting one does not think.",
        year: 1511,
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1200px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
        category: "Renaissance",
        description:
            "This fresco is one of the most famous examples of High Renaissance art. It depicts a congregation of Greek philosophers, mathematicians, and scientists, including Plato and Aristotle at the center. The painting is celebrated for its perfect embodiment of the classical spirit of the Renaissance.",
        medium: "Fresco",
        dimensions: "500 cm × 770 cm",
    },
    {
        id: 30,
        title: "Dance",
        artist: "Henri Matisse",
        quote: "Creativity takes courage.",
        year: 1910,
        imageUrl:
            "https://www.henrimatisse.org/assets/img/paintings/the-dance.jpg",
        category: "Fauvism",
        description:
            "This painting depicts five dancing figures, painted in a vibrant red against a simplified blue and green background. It is celebrated for its expressive use of color and the rhythmic arrangement of the figures.",
        medium: "Oil on canvas",
        dimensions: "260 cm × 391 cm",
    },
    {
        id: 31,
        title: "Christina's World",
        artist: "Andrew Wyeth",
        quote: "I prefer winter and fall, when you feel the bone structure of the landscape.",
        year: 1948,
        imageUrl:
            "https://www.moma.org/media/W1siZiIsIjE0NTQ1OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=33c151dba7f8e019",
        category: "American Regionalism",
        description:
            "This painting depicts a woman crawling through a field toward a house on the horizon. The woman is Christina Olson, who suffered from a degenerative muscle disorder. The painting is a statement about perseverance in the face of adversity.",
        medium: "Tempera on panel",
        dimensions: "81.9 cm × 121.3 cm",
    },
    {
        id: 32,
        title: "Number 1A, 1948",
        artist: "Jackson Pollock",
        quote: "Painting is self-discovery. Every good artist paints what he is.",
        year: 1948,
        imageUrl:
            "https://www.jackson-pollock.org/assets/img/paintings/number-1.jpg",
        category: "Abstract Expressionism",
        description:
            "This painting is an example of Pollock's 'drip' technique, where he would drip and pour paint onto a canvas laid on the floor. The result is a complex, intricate pattern of swirls and splatters that captures the dynamic movement of the artist's gestures.",
        medium: "Oil and enamel paint on canvas",
        dimensions: "172.7 cm × 264.2 cm",
    },
    {
        id: 33,
        title: "The Subway",
        artist: "George Tooker",
        quote: "Art is the concrete representation of our most subtle feelings.",
        year: 1950,
        imageUrl:
            "https://whitneymedia.org/assets/artwork/3052/50_23_cropped.jpeg",
        category: "Magic Realism",
        description:
            "This painting depicts a claustrophobic subway station with ghostly figures. It expresses the alienation and anxiety of modern urban life, particularly in the context of the Cold War and McCarthyism.",
        medium: "Tempera on composition board",
        dimensions: "45.7 cm × 91.4 cm",
    },
];
