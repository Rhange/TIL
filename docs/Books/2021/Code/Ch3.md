# 점자와 이진부호

바비에르가 만든 기록 체계는 매우 복잡하다는 문제점이 있었다. 바비에르는 알파벳의 문자에 대응되는 점과 선의 패턴을 만들지 않고, 소리에 대응되는 패턴을 고안했기 때문에 한 단어를 표현하는 데도 상당히 많은 부호가 필요했다. 이 기록 체계는 전장에서 '짧은 메세지'를 전달할 때는 나쁘지 않았으나 좀 더 긴 문장이나 책을 적는 데 사용하기에는 매우 부적합했다.

6개의 점으로 이루어져 있어서 나타낼 수 있는 가짓 수는 2<sup>6</sup>(64)이다.

> 흥미로운 부분은 숫자를 나타내기 위한 '숫자 표시 부호'와 숫자 표시 부호를 취소시키기 위한 '문자 표시 부호'가 각각 있다는 점이다. 이런 부호들을 일반적으로 '선행 부호' 또는 '시프트(shift) 부호'라 부른다.

대문자 표시 부호는 바로 뒤의 '한 글자'에 대하여 소문자가 아닌 대문자로 해석될 수 있도록 한다. 이러한 부호는 이스케이프(escape) 부호라 부른다. 이 부호는 단조롭고 반복적인 부호의 해석 과정에서 '탈출(escape)'하여 새로운 해석이 가능하도록 해준다.