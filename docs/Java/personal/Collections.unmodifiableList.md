# `unmodifiableList()`

- Java `Collection`에서 제공하는 `unmodifiableList` method를 활용하면 `List`에 데이터를 추가한 뒤, 더 이상 데이터 삭제 및 추가를 못하도록 할 수 있다.
- `unmodifiableList`가 적용된 `List`에 `remove`나 `add`를 사용하면 에러가 난다.

```console
java.lang.UnsupportedOperationException
```

- 완벽하게 해당 배열은 `Read-Only`가 되었지만 `null` 값이나 다른 배열을 통해서 초기화는 가능하다.

- 하지만, `unmodifiableList`는 원본의 불변성을 보장하지 않는다.

```java
public static <T> List<T> unmodifiableList(List<? extends T> list) {
    return (list instanceof RandomAccess ?
        new UnmodifiableRandomAccessList<>(list) :
        new UnmodifiableList<>(list));
}
```

## 참고 자료

[Java SE 8 docs](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#unmodifiableCollection-java.util.Collection-)

[Java List unmodifiableList (final 같은 배열)](https://lts0606.tistory.com/133)

[[Java] Unmodifiable Collection vs Immutable 차이점](https://soft.plusblog.co.kr/71)

[UnmodifiableList은 만능이 아니다. / 방어적 복사](https://ecsimsw.tistory.com/entry/unmodifiableList%EC%9D%80-%EB%A7%8C%EB%8A%A5%EC%9D%B4-%EC%95%84%EB%8B%88%EB%8B%A4)
