# 객체 지향 프로그래밍 (Object Oriented Programming)

[부스트코스 생활코딩 Java2](https://www.boostcourse.org/cs128/joinLectures/66594) 내용을 정리한 것

## Method Programming (Procedural Programming)

매소드를 이용해서 작은 부품을 만들고 이것을 결합해서 더 큰 프로그램을 만들어가는 테크닉

많은 프로그래밍 언어가 이를 따른다. (C)

## Object Oriented Programming

매소드와 변수를 그룹화해서 이름을 붙인 것

## Class와 Instance

```java
import java.io.FileWriter;
import java.io.IOException;

public class OthersOOP {

	public static void main(String[] args) throws IOException {

		// Math is class
		// System is also class
		System.out.println(Math.PI);	// PI is variable
		System.out.println(Math.floor(1.8));	// floor is method
		System.out.println(Math.ceil(1.8));		// ceil is method

		// 긴 맥락의 작업에서는 클래스 자체를 사용하는 것이 아니라 복제본을 사용한다.
		// f1 is instance
		// FileWriter is class
		FileWriter f1 = new FileWriter("data.txt");
		f1.write("Hello");
		f1.write(" Java");
		f1.close();

		// f2 is also instance
		FileWriter f2 = new FileWriter("data2.txt");
		f2.write("Hello");
		f2.write(" Java2");
		f2.close();

	}

}
```

## Instance를 못 만드는 Class

```java
Math m1 = new Math();
```

위의 코드처럼 Math Class는 인스턴스화를 할 수 없다.

Math Class의 코드를 보면 아래와 같다.

```java
public final class Math {

    /**
     * Don't let anyone instantiate this class.
     */
    private Math() {}

    // ...
}
```

위의 코드처럼 Math Class의 instance 생성을 막는 코드가 작성되어있다.

## Class 예제 코드

```java
class Print {
	public static String delimiter = "";

	public static void A() {
		System.out.println(delimiter);
		System.out.println("A");
		System.out.println("A");
	}

	public static void B() {
		System.out.println(delimiter);
		System.out.println("B");
		System.out.println("B");
	}

	public static void printAll() {
		A();
		A();
		B();
		B();
	}
}

public class MyOOP {

	public static void main(String[] args) {

		Print.delimiter = "====";
		Print.printAll();

		Print.delimiter = "****";
		Print.printAll();

	}

}
```

## .java의 실행 논리

`[filename].java` 파일안에 `filename`과 **똑같은** 이름을 가지는 class가 존재해야 한다.

Java는 `.java` 파일을 `.class`로 complie하고 이를 실행시킬 때, 해당 `.java` 파일의 이름의 class를 찾은 다음 그 class의 method들 중에서 `main` method를 실행하는 기본 동작을 가지고 있다. (`main` method는 접근 제어로 `public`를 가져야한다.)

하나의 `.java` 파일에 여러개의 class를 만들어 놓았다면 `.class`로 compile할 때 각각의 class에 해당하는 `.class` 파일이 만들어진다.
