var mainTl = new TimelineMax({ paused: true });

        var parentHeight = $('.beer').height();
        var parentWidth = $('.beer').width();

        $('.beer').append(new Array(50).join('<div class="bubble" />'));

        $(".bubble").each(function (i, bubble) {
            animateBubble(bubble);
        });
        function animateBubble(bubble) {
            var bubble = $(bubble);
            var bubbleHeight = bubble.height();
            var tl = new TimelineMax();
            tl
                .set(bubble, { y: function (index) { return (index + parentHeight * 1.1) }, scale: random(0.2, 1.2), x: random(1, 3000), rotation: random(0, 360) })
                .to(bubble, 1, { x: "+=10", yoyo: true, repeat: 2, ease: Sine.easeInOut }, random(0, 30))
                .to(bubble, random(2, 30), { rotation: '+=360', y: String(-bubbleHeight), onComplete: animateBubble, onCompleteParams: [bubble] }, 0);
            return tl;
        }

        function random(min, max) {
            if (max == null) { max = min; min = 0; }
            return Math.random() * (max - min) + min;
        }