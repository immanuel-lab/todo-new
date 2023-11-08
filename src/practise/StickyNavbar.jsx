import React, { useState, useEffect } from 'react';



function fixedNavbar() {
  const [navbarStyle, setNavbarStyle] = useState({ position: 'fixed', top: 0 });
  const scrollThreshold = 800;

  useEffect(() => {
    // Function to update the navbar style based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= scrollThreshold) {
        // Remove fixed style when scrolled past 1000 pixels
        setNavbarStyle({ position: 'static' });
      } else {
        // Stick to the top
        setNavbarStyle({ position: 'fixed', top: 0 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav style={navbarStyle} className="flex justify-around items-center w-full h-20 bg-gray-300">
        <p>home</p>
        <p>contact</p>
        <p>about</p>
        <p>setting</p>
      </nav>
      <div className="content">
      Thomas the Apostle (Greek: Θωμᾶς, Syriac ܬܐܘܡܐ, Tʾōmā, meaning "the twin"),[a] also known as Didymus (Greek: Δίδυμος Didymos, meaning "twin"), was one of the Twelve Apostles of Jesus according to the New Testament. Thomas is commonly known as "Doubting Thomas" because he initially doubted the resurrection of Jesus Christ when he was told of it (as is related in the Gospel of John); he later confessed his faith ("My lord and my God") on seeing the wounds left over from the crucifixion.


Thomas the Apostle, detail of the mosaic in the Basilica of San Vitale, Ravenna, 6th century
According to traditional accounts of the Saint Thomas Christians of modern-day states of Tamil Nadu and Kerala in India, Saint Thomas travelled outside the Roman Empire to preach the Gospel, travelling as far as the Tamilakam which is in South India, Tamil Nadu, India[1][4][5][6] and reached Muziris of Tamilakam (modern-day North Paravur and Kodungalloor in Kerala State, India) in AD 52.[7][8][1] In 1258, some of the relics were brought to Ortona, in Abruzzo, Italy, where they have been held in the Church of Saint Thomas the Apostle.[9] He is regarded as the patron saint of India among its Christian adherents,[10][11] and the Feast of Saint Thomas on July 3 is celebrated as Indian Christians' Day.[12][13] The name Thomas remains quite popular among the Saint Thomas Christians of the Indian subcontinent.

Many churches in the Middle East and southern Asia, besides India, also mention Apostle Thomas in their historical traditions as being the first evangelist to establish those churches, the Assyrian Church of the East,[14] the early church of Sri Lanka.[15]

Part of a series on
Saint Thomas Christians
Saint Thomas Christian cross
History
Saint ThomasThomas of CanaMar Sabor and Mar ProthTharisapalli platesSynod of DiamperCoonan Cross Oath
Religion
CrossesDenominationsChurchesSyriac languageMusic
Prominent persons
Abraham MalpanParemmakkal Thoma KathanarKayamkulam Philipose RambanSaint Kuriakose Elias ChavaraVarghese Payyappilly PalakkappillyMar Thoma ISaint AlphonsaSadhu Kochoonju UpadesiKariattil Mar OusepGeevarghese Dionysius of VattasserilGeevarghese Mar Gregorios of ParumalaGeevarghese IvaniosEuphrasia EluvathingalThoma of Villarvattom
Culture
MargamkaliParichamuttukaliCuisineSuriyani Malayalam
vte
Part of a series on
Christianity in India
Christianity in India
Communities
People
Denominations
Organisations
vte
Gospel of John
Thomas first speaks in the Gospel of John. In John 11:16,[16] when Lazarus has recently died, and the apostles do not wish to go back to Judea, Thomas says: "Let us also go, that we may die with him."[b]

Thomas speaks again in John 14:5. There, Jesus had just explained that he was going away to prepare a heavenly home for his followers, and that one day they would join him there. Thomas reacted by saying, "Lord, we know not whither thou goest; and how can we know the way?"[17]

John 20:24–29[18] tells how doubting Thomas was skeptical at first when he heard that Jesus had risen from the dead and appeared to the other apostles, saying, "Except I shall see on his hands the print of the nails, and put my finger into the print of the nails, and thrust my hand into his side, I will not believe."[19] But when Jesus appeared later and invited Thomas to touch his wounds and behold him, Thomas showed his belief by saying, "My lord and my God".[20] Jesus then said, "Thomas, because thou hast seen me, thou hast believed: blessed are they that have not seen, and yet have believed."[21]

Names and etymologies
The name Thomas (Greek: Θωμᾶς) given for the apostle in the New Testament is derived from the Aramaic תְּאוֹמָא Tʾōmā[22][23] (Syriac ܬܐܘܿܡܵܐ/ܬ݁ܳܐܘܡܰܐ Tʾōmā/Tāʾwma), meaning "the twin" and cognate to Hebrew תְּאוֹם tʾóm. The equivalent term for twin in Greek, which is also used in the New Testament, is Δίδυμος Didymos.

Other names
The Nag Hammadi copy of the Gospel of Thomas begins: "These are the secret sayings that the living Jesus spoke and Didymus, Judas Thomas, recorded." Early Syrian traditions also relate the apostle's full name as Judas Thomas.[c] Some have seen in the Acts of Thomas (written in east Syria in the early 3rd century, or perhaps as early as the first half of the 2nd century) an identification of Thomas with the apostle Judas, Son of James. However, the first sentence of the Acts follows the Gospels and the Acts of the Apostles in distinguishing the apostle Thomas and the apostle Judas son of James. Others, such as James Tabor, identify him as Jude, brother of Jesus mentioned by Mark. In the Book of Thomas the Contender, part of the Nag Hammadi library, he is alleged to be a twin to Jesus: "Now, since it has been said that you are my twin and true companion, examine yourself…"[24]

A "Doubting Thomas" is a skeptic who refuses to believe without direct personal experience—a reference to the Gospel of John's depiction of the Apostle Thomas, who, in John's account, refused to believe the resurrected Jesus had appeared to the ten other apostles until he could see and feel Jesus' crucifixion wounds.

Feast days
When the feast of Saint Thomas was inserted in the Roman calendar in the 9th century, it was assigned to 21 December. The Martyrology of St. Jerome mentioned the apostle on 3 July, the date to which the Roman celebration was transferred in 1969, so that it would no longer interfere with the major ferial days of Advent.[25] Traditionalist Roman Catholics (who follow the General Roman Calendar of 1960 or earlier), the Lutheran Church, and many Anglicans (including members of the Episcopal Church as well as members of the Church of England who worship according to the 1662 edition of the Book of Common Prayer),[26] still celebrate his feast day on 21 December. However, most modern liturgical calendars (including the Common Worship calendar of the Church of England) prefer 3 July, Thomas is remembered in the Church of England with a Festival.[27]
Thomas the Apostle (Greek: Θωμᾶς, Syriac ܬܐܘܡܐ, Tʾōmā, meaning "the twin"),[a] also known as Didymus (Greek: Δίδυμος Didymos, meaning "twin"), was one of the Twelve Apostles of Jesus according to the New Testament. Thomas is commonly known as "Doubting Thomas" because he initially doubted the resurrection of Jesus Christ when he was told of it (as is related in the Gospel of John); he later confessed his faith ("My lord and my God") on seeing the wounds left over from the crucifixion.


Thomas the Apostle, detail of the mosaic in the Basilica of San Vitale, Ravenna, 6th century
According to traditional accounts of the Saint Thomas Christians of modern-day states of Tamil Nadu and Kerala in India, Saint Thomas travelled outside the Roman Empire to preach the Gospel, travelling as far as the Tamilakam which is in South India, Tamil Nadu, India[1][4][5][6] and reached Muziris of Tamilakam (modern-day North Paravur and Kodungalloor in Kerala State, India) in AD 52.[7][8][1] In 1258, some of the relics were brought to Ortona, in Abruzzo, Italy, where they have been held in the Church of Saint Thomas the Apostle.[9] He is regarded as the patron saint of India among its Christian adherents,[10][11] and the Feast of Saint Thomas on July 3 is celebrated as Indian Christians' Day.[12][13] The name Thomas remains quite popular among the Saint Thomas Christians of the Indian subcontinent.

Many churches in the Middle East and southern Asia, besides India, also mention Apostle Thomas in their historical traditions as being the first evangelist to establish those churches, the Assyrian Church of the East,[14] the early church of Sri Lanka.[15]

Part of a series on
Saint Thomas Christians
Saint Thomas Christian cross
History
Saint ThomasThomas of CanaMar Sabor and Mar ProthTharisapalli platesSynod of DiamperCoonan Cross Oath
Religion
CrossesDenominationsChurchesSyriac languageMusic
Prominent persons
Abraham MalpanParemmakkal Thoma KathanarKayamkulam Philipose RambanSaint Kuriakose Elias ChavaraVarghese Payyappilly PalakkappillyMar Thoma ISaint AlphonsaSadhu Kochoonju UpadesiKariattil Mar OusepGeevarghese Dionysius of VattasserilGeevarghese Mar Gregorios of ParumalaGeevarghese IvaniosEuphrasia EluvathingalThoma of Villarvattom
Culture
MargamkaliParichamuttukaliCuisineSuriyani Malayalam
vte
Part of a series on
Christianity in India
Christianity in India
Communities
People
Denominations
Organisations
vte
Gospel of John
Thomas first speaks in the Gospel of John. In John 11:16,[16] when Lazarus has recently died, and the apostles do not wish to go back to Judea, Thomas says: "Let us also go, that we may die with him."[b]

Thomas speaks again in John 14:5. There, Jesus had just explained that he was going away to prepare a heavenly home for his followers, and that one day they would join him there. Thomas reacted by saying, "Lord, we know not whither thou goest; and how can we know the way?"[17]

John 20:24–29[18] tells how doubting Thomas was skeptical at first when he heard that Jesus had risen from the dead and appeared to the other apostles, saying, "Except I shall see on his hands the print of the nails, and put my finger into the print of the nails, and thrust my hand into his side, I will not believe."[19] But when Jesus appeared later and invited Thomas to touch his wounds and behold him, Thomas showed his belief by saying, "My lord and my God".[20] Jesus then said, "Thomas, because thou hast seen me, thou hast believed: blessed are they that have not seen, and yet have believed."[21]

Names and etymologies
The name Thomas (Greek: Θωμᾶς) given for the apostle in the New Testament is derived from the Aramaic תְּאוֹמָא Tʾōmā[22][23] (Syriac ܬܐܘܿܡܵܐ/ܬ݁ܳܐܘܡܰܐ Tʾōmā/Tāʾwma), meaning "the twin" and cognate to Hebrew תְּאוֹם tʾóm. The equivalent term for twin in Greek, which is also used in the New Testament, is Δίδυμος Didymos.

Other names
The Nag Hammadi copy of the Gospel of Thomas begins: "These are the secret sayings that the living Jesus spoke and Didymus, Judas Thomas, recorded." Early Syrian traditions also relate the apostle's full name as Judas Thomas.[c] Some have seen in the Acts of Thomas (written in east Syria in the early 3rd century, or perhaps as early as the first half of the 2nd century) an identification of Thomas with the apostle Judas, Son of James. However, the first sentence of the Acts follows the Gospels and the Acts of the Apostles in distinguishing the apostle Thomas and the apostle Judas son of James. Others, such as James Tabor, identify him as Jude, brother of Jesus mentioned by Mark. In the Book of Thomas the Contender, part of the Nag Hammadi library, he is alleged to be a twin to Jesus: "Now, since it has been said that you are my twin and true companion, examine yourself…"[24]

A "Doubting Thomas" is a skeptic who refuses to believe without direct personal experience—a reference to the Gospel of John's depiction of the Apostle Thomas, who, in John's account, refused to believe the resurrected Jesus had appeared to the ten other apostles until he could see and feel Jesus' crucifixion wounds.

Feast days
When the feast of Saint Thomas was inserted in the Roman calendar in the 9th century, it was assigned to 21 December. The Martyrology of St. Jerome mentioned the apostle on 3 July, the date to which the Roman celebration was transferred in 1969, so that it would no longer interfere with the major ferial days of Advent.[25] Traditionalist Roman Catholics (who follow the General Roman Calendar of 1960 or earlier), the Lutheran Church, and many Anglicans (including members of the Episcopal Church as well as members of the Church of England who worship according to the 1662 edition of the Book of Common Prayer),[26] still celebrate his feast day on 21 December. However, most modern liturgical calendars (including the Common Worship calendar of the Church of England) prefer 3 July, Thomas is remembered in the Church of England with a Festival.[27]   
      
      
      
      </div>
    </div>
  );
}

export default fixedNavbar;
