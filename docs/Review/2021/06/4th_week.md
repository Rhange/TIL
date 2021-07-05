# 4주차 (첫 출근과 펜타호)

## 06.21 월요일

- 첫 출근함

## 06.22 화요일

- 3시 기상
- 7시 출근
- 2시반 퇴근

## 06.23 수요일

- Ubuntu 20.04 환경에서 펜타호 설치 및 구동 확인
- Notion에 Ubuntu 펜타호 설치 과정 정리
- 펜타호 설치 메뉴얼 PPT 작성
- 펜타호 설치 메뉴얼 PPT 파일 구글 드라이브에 업로드
- 펜타호 설치 메뉴얼 작성한 내용 'Trello'에 작성

## 06.24 목요일

- 펜타호 커뮤니티 페이지, 회사 홈페이지 둘러봄
- MySQL 설치
- 펜타호 Youtube 영상 시청
- Kaggle 사이트에서 받은 데이터셋으로 펜타호 연습
  - `xls` -> `txt`
  - `csv` -> `excel`
  - `NullPointException` 에러
    -> 타입 변환이 제대로 이루지지 않음
    -> Input step 설정에서 `Lazy conversion` 체크되어 있던 것을 해제하여 Auto casting이 이루어지도록 함

## 06.25 금요일

펜타호 설치 이후 시청해야 할 Youtube 영상 보기

- [x] 펜타호 소개 영상
- [x] 펜타호 데이터처리 기본원리
  - Field (열, 세로), Row (행, 가로)
- [x] 펜타호 데이터처리 모듈 및 작업 단위 설명
  - `Transformation` 과 `Job` 크게 두 개로 나눌 수 있다.
  - Transformation안에서 수행되는 '개별 작업 단위'를 `Step` 이라고 한다. `.ktr` 확장자 파일로 저장된다.
  - Job은 데이터, 파일 및 전체적인 Workflow를 관리하는 모듈. Job 안에서 수행되는 '개별 작업 단위'를 `Entry` 라고 한다. `.kjb` 확장자 파일로 저장된다.
  - Transformation과 Job이 종속 관계인 것은 아니다.
  - Transformation 안에서도 Transformation & Job를 호출할 수 있으며 Job에서도 역시 Transformation & Job을 호출 할 수 있다.
  - 두 모듈 모두 데이터를 처리하거나 제어하는 작업 단위들이 모여있는 모듈이라는 공통점이 있다.
- [x] 설치가 끝난 후 처음 실행했을 때 나오는 화면에 대한 설명
  - Market Place
- [x] 취합할 때 사용할 Step Append streams 관련

  - 두 개의 step에 담겨 있는 데이터를 합칠 때 활용함

  주의할 점

  1. 합치려는 데이터들의 **데이터 필드 구조가 동일**해야 한다.
  2. Step 편집창에서 **Head hop/Tail hop 설정**을 해줘야 한다.
  3. **3개 이상의 데이터는 합치지 못한다.**

- [x] 데이터를 나눌 때 사용할 Filter rows 관련 - 1
  - `Filter rows` Step을 활용해보자.
  - 필기시험 평균 점수와 각 개별과목 점수의 필터링을 연습 (value 값을 활용한 비교연산자)
  - 빅데이터 점수랑 펜타호 점수를 비교하여 분류 (field와 field를 비교연산)
- [x] 데이터를 나눌 때 사용할 Filter rows 관련 - 2
  - `AND`, `OR`, `AND NOT`, `OR NOT`, `XOR`
- [x] 엑셀 파일의 데이터를 불러와 텍스트 파일로 저장하기 (`xls` → `txt`)
- [x] 데이터를 엑셀 파일로 저장하기 (`csv` → `xls` )
- [x] 실제로 같이 따라해볼 시나리오 -> 조금 수정되었으나 전반적인 맥락은 비슷

  - 회사 내 문제점 및 개선점 응답 데이터

- 오후 회의 (12:40 ~ 14:20)
  - 다음주 할 일 정함
    1. Pentaho-MySQL 연동 확인 및 메뉴얼 작성
    2. Pentaho-MSSQL 연동 확인 및 메뉴얼 작성
    3. 1, 2번 각각의 `INSERT / UPDATE` 테스트
