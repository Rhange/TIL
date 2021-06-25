# MySQL 연동하기

펜타호는 Java로 만들어진 프로그램이다. 따라서 [JDBC](https://ko.wikipedia.org/wiki/JDBC)를 활용해서 MySQL을 펜타호에 연결할 수 있다.

순서는 다음과 같다.

1. 본인의 컴퓨터에 먼저 MySQL을 설치한다.
2. 펜타호와 연결하기 위한 JDBC MySQL **Connector/J** 파일을 다운받는다.
3. 설치한 펜타호의 폴더 내부에서 `data-integration/lib` 위치에 다운받은 `.jar` 확장자 파일을 넣는다.
4. 펜타호에서 DB 연결창을 열고 MySQL 연결 및 테스트를 진행한다.

- DB 연결이 잘 되었는지 확인하기 위해서 예제 2가지를 테스트 해볼 것이다.

## 1. MySQL 설치

1. MySQL Community [다운로드 페이지](https://dev.mysql.com/downloads/)에서 본인의 운영체제에 맞는 링크를 클릭해서 다운로드한다.

2.
