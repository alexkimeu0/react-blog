import React from "react";
import Post from "../Post/Post";

import "./Posts.css";

const Posts = () => {
  const blogPosts = [
    {
      title: "LESSONS AT 14",
      image:
        "https://images.unsplash.com/photo-1551847618-a4b47ff8cec8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share",
      author: "Miss Dongo",
    },
    {
      title: "WELCOME TO ADULTING",
      image:
        "https://images.unsplash.com/photo-1468357161629-c3c530741678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80",
      body:
        "You wanted to fly planes when seven.Now the only thing flying is the ache of your involuntary stationary feet.You stare into the nothingness of the blue skies, a Second Class Honors- Upper Division well - secured at arm in the popular brown A4 envelope you expectantly bought at Sh 10. Endless nerve - wracking decisions to make.Stuck is the word, rudderless fits the shoe too.You grow up overnight and you realize your loved ones lied, you are not special, the world begs to differ.Passion smothered by bills took a back seat.A hundred applications later, you understand a tad why strippers cling onto poles with a tinge of respect for them.No, life was not supposed to turn out like this.An accumulating student loan, squeezing into your baby siblings space, still depending on the old man for mere credit, your brokeness cancelling out on all plans with friends, and a newfound love - hate symbiosis with Fuzu forever flooding your Gmail with intangible hope.",
      author: "Miss Dongo",
    },
    {
      title: "WHEN IN ROME",
      image:
        "https://images.unsplash.com/photo-1543046458-2dc399de1692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      body:
        "They give me the we - don’t -do -that - here look.That is how my hands obediently find their way back onto my lap.They do not clap for peeps after they are done talking, well, Got it.My eyes do a swift scan of the room and the youths that are in it.These people look exactly like me, physically speaking, but never have I ever felt so different in my life.I am in for an interesting ride.Buckle up sweetie, I whisper to my being.",
      author: "Miss Dongo",
    },
    {
      title: "WINDOW SEAT",
      image:
        "https://images.unsplash.com/photo-1519074025331-81dcc0c0ee6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      body:
        "I felt the air ticket in my hands.It seemed too good to be true considering how I had been to hell and back just to get it.That moment right there was surreal, I closed my eyes for a moment and confirmed that dreams indeed come true.Why go on an overseas volunteer mission that does not pay you a dime ?” Scratch that.",
      author: "Miss Dongo",
    },
    {
      title: "THE GOOD DOCTOR",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
      body:
        "Stride after stride, this voluptuous woman tries to make her way to the pharmacy a few meters ahead.Sandals on her feet which have seen 30 years of blissful marriage that has naturally, with time, settled into a form of deep friendship.Remind me to go for character over looks the next time I crush on somebody’s boy.These feet can delightfully narrate the 1982 government coup, describe progressive growth, pain, death, and scrawl out stories from varied generations each with a different set of credences.She concurs our microwave generation is in for a rough ride and that our children will have it rougher.Her feet keep moving, rhythmically.",
      author: "Miss Dongo",
    },
    {
      title: "FIND YOUR TRIBE",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
      body:
        "Wakaita makanjo kumbe ni sisi huwalipa salo…Neil kept playing Extravaganza.on YouTube.The song is on fire I must admit and he has always had good taste.He reminded me of light - hearted purple leaves that gracefully fall off Jacaranda trees.Trees that have perfected the art of shedding off unnecessary baggage.The classic KICC rooftop also came to mind with its splendid view and me trying to capture a flawless photo of him overlooking the gorgeous Nairobi skyline.Too bad this time I can’t cling onto his jungle green bomber jacket and try bribing him with puppy eyes.I furtively salivated over the fancy clad on the sofa, damn it, why does he have to be so cool!",
      author: "Miss Dongo",
    },
    {
      title: "DIFFERENT STROKES",
      image:
        "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80’",
      body:
        "“Here ?” They asked simultaneously surprised by the mere backward thought of it.“Yes here.” I answered nonchalantly then burst out with a hearty laugh.“Yes we have to pee here.” My soon to be foreign girl friends stood aghast probably ruminating over the theory of Africans being monkeys after all.They could not, for the life of them, believe that we were going to take our calls of nature somewhere upcountry, in an open field.A field thick with rural smell; burning firewood remains, meat hang in a smoky kitchen, cows softly mooing, that raw freshness of engulfing thickets and my my my, the low night sky which spread like a magnificent dark endless sheet of nothing but twinkles.",
      author: "Miss Dongo",
    },
    {
      title: "BODY ON ME",
      image:
        "https://images.unsplash.com/photo-1504194569341-48a2e831a3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      body:
        "“Here ?” They asked simultaneously surprised by the mere backward thought of it.“Yes here.” I answered nonchalantly then burst out with a hearty laugh.“Yes we have to pee here.” My soon to be foreign girl friends stood aghast probably ruminating over the theory of Africans being monkeys after all.They could not, for the life of them, believe that we were going to take our calls of nature somewhere upcountry, in an open field.A field thick with rural smell; burning firewood remains, meat hang in a smoky kitchen, cows softly mooing, that raw freshness of engulfing thickets and my my my, the low night sky which spread like a magnificent dark endless sheet of nothing but twinkles.",
      author: "Miss Dongo",
    },
  ];
  return (
    <div class="posts-container">
      {blogPosts.map((post, i) => (
        <Post post={post} id={i} />
      ))}
    </div>
  );
};

export default Posts;
