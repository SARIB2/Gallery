// משתנה גלובלי ליצירת אינדקס עבור מספר התמונה המוצגת. הפונקציות נעזרות במשתנה זה על מנת להציג את התמונות בהתאם למספר שלהן. המשתנה מתחיל בערך 1 כיוון שהתמונה הראשונה שמוצגת בפתיחת הדף היא תמונה מספר 1.

let slideIndex = 1;

//פונקציה ללחיצה על החיצים למעבר בין התמונות בגלריה. קוראת לפונקציה שואוסליידס על מנת להפעיל את התצוגה המתאימה

function plusSlides(n) {
    showSlides(slideIndex += n);
}


//פונקציה המתאימה את התצוגה בהתאם לתמונה הנבחרת. היא מופעלת בטעינת הדף או על ידי לחיצה על החיצים או על ידי לחיצה ישירה על התמונות בסרגל התחתון.

function showSlides(n) {
    slideIndex = n; //רק לאחר לחיצה ישירה על תמונה בסרגל התמונות התחתון יש להתאים את אינדקס התמונות לתמונה שמוצגת כעת
    let slides = document.getElementsByClassName("mySlides");
    let galleryNav = document.getElementsByClassName("demo");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
        galleryNav[i].className = galleryNav[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    galleryNav[slideIndex - 1].className += " active";
    document.getElementById("caption").innerHTML = galleryNav[slideIndex - 1].alt;
}