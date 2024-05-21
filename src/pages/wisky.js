import { useState } from "react";
import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart,  FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import StarRating from "./StarRating";

// 진짜 사용자 데이터
const realUsers = [
  { id: 1, username: "user1", password: "password1", name: "User1" },
  { id: 2, username: "user2", password: "password2", name: "User2" },
  { id: 3, username: "user3", password: "password3", name: "User3" }
];

const WiskyList1 = () => {
  const [whiskeys, setWhiskeys] = useState([
    {
      id: 1,
      name: "맥카랜 트리플 우드",
      price: 50000,
      alcoholContent: "40%",
      volume: "700ml",
      rating: 4.5,
      type: "스카치",
      liked: false,
      reviews: [{ content: "훌륭한 위스키입니다.", user: realUsers[0] },
      { content: "매우 부드럽고 깊은 맛이 좋습니다.", user: realUsers[1] },
      { content: "가격 대비 훌륭한 제품입니다.", user: realUsers[2] },
      { content: "내가 마신 것 중 최고의 위스키!", user: realUsers[0] },
      { content: "이 가격에 이 정도의 퀄리티는 흔하지 않습니다.", user: realUsers[1] }]
    },
    {
      id: 2,
      name: "아벨라우어 18년",
      price: 100000,
      alcoholContent: "43%",
      volume: "750ml",
      rating: 4.8,
      type: "스카치",
      liked: false,
      reviews: [{ content: "부드럽고 고급스러운 향과 맛이 좋습니다.", user: realUsers[1] },
      { content: "훌륭한 퀄리티의 위스키입니다.", user: realUsers[2] },
      { content: "정말 맛있는 위스키예요!", user: realUsers[0] },
      { content: "여기에 리뷰를 추가합니다.", user: null },
      { content: "또 다른 리뷰입니다.", user: null }]
    },
    {
      id: 3,
      name: "글렌피딕 12년",
      price: 40000,
      alcoholContent: "40%",
      volume: "700ml",
      rating: 4.3,
      type: "스카치",
      liked: false,
      reviews: [
        { content: "아주 좋은 향이 나요.", user: realUsers[2] },
        { content: "이 가격에 이 정도 퀄리티면 참 좋습니다.", user: realUsers[0] },
        { content: "너무 부드럽고 맛있어요.", user: realUsers[1] },
        { content: "리뷰가 또 추가되었습니다.", user: null },
        { content: "마지막 리뷰입니다.", user: null }
      ]
    },
    {
      id: 4,
      name: "라그불린 16년",
      price: 80000,
      alcoholContent: "46%",
      volume: "750ml",
      rating: 4.6,
      type: "스카치",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 5,
      name: "라피고 10년",
      price: 60000,
      alcoholContent: "43%",
      volume: "700ml",
      rating: 4.4,
      type: "아이슬란드",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 6,
      name: "이슬레이 10년",
      price: 55000,
      alcoholContent: "43%",
      volume: "700ml",
      rating: 4.2,
      type: "스카치",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 7,
      name: "볼튜모어 12년",
      price: 45000,
      alcoholContent: "40%",
      volume: "700ml",
      rating: 4.1,
      type: "아이슬란드",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 8,
      name: "맥카랜 에디션 2",
      price: 70000,
      alcoholContent: "48%",
      volume: "750ml",
      rating: 4.7,
      type: "스카치",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 9,
      name: "매켈란 골드",
      price: 85000,
      alcoholContent: "43%",
      volume: "700ml",
      rating: 4.6,
      type: "아이슬란드",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 10,
      name: "올드포스트 12년",
      price: 60000,
      alcoholContent: "40%",
      volume: "750ml",
      rating: 4.3,
      type: "아일랜드",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 11,
      name: "라가불린 12년",
      price: 55000,
      alcoholContent: "43%",
      volume: "700ml",
      rating: 4.4,
      type: "스카치",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 12,
      name: "글렌피딕 15년",
      price: 70000,
      alcoholContent: "43%",
      volume: "750ml",
      rating: 4.5,
      type: "스카치",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 13,
      name: "칼톤 14년",
      price: 75000,
      alcoholContent: "46%",
      volume: "700ml",
      rating: 4.6,
      type: "스카치",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 14,
      name: "윌리엄 러브래드 12년",
      price: 65000,
      alcoholContent: "40%",
      volume: "700ml",
      rating: 4.7,
      type: "버번",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
    {
      id: 15,
      name: "레드브레스트 12년",
      price: 60000,
      alcoholContent: "40%",
      volume: "750ml",
      rating: 4.5,
      type: "아일랜드",
      liked: false,
      reviews: [{ content: "간단하고 시원한 맛이 좋습니다.", user: realUsers[0] },
      { content: "다양한 풍미를 느낄 수 있는 위스키입니다.", user: realUsers[1] },
      { content: "이 가격에 이 정도면 만족합니다.", user: realUsers[2] },
      { content: "또 다른 리뷰를 추가합니다.", user: null },
      { content: "마지막으로 리뷰를 작성합니다.", user: null }
      ]
    },
  ]);

  const [user, setUser] = useState(null); // 사용자 정보 상태
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [likedWhiskeys, setLikedWhiskeys] = useState([]); // 찜한 목록 상태
  const [ratings, setRatings] = useState({}); // 별점 상태
  const [userRating, setUserRating] = useState(0); // 사용자가 입력한 별점
  // 리뷰 상태 및 현재 사용자 상태 설정
  const [reviews, setReviews] = useState(whiskeys.map(whiskey => ({ ...whiskey, reviewInput: "", user: null, showAllReviews: false })));
  const [currentUser, setCurrentUser] = useState(null); // 현재 사용자
  


  // 로그인 함수
  const handleLogin = (username, password) => {
    // 입력된 사용자 이름과 비밀번호를 확인하여 로그인 처리
    const user = realUsers.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert("잘못된 사용자 이름 또는 비밀번호입니다.");
    }
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setCurrentUser(null);
  };

  // 검색어 입력 핸들러
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // 찜하기 버튼 클릭 시 상태 업데이트
  const toggleLike = (id) => {
    const updatedWhiskeys = whiskeys.map((whiskey) =>
      whiskey.id === id ? { ...whiskey, liked: !whiskey.liked } : whiskey
    );

    setWhiskeys(updatedWhiskeys);

    // 찜한 경우
    if (!likedWhiskeys.includes(id)) {
      setLikedWhiskeys([...likedWhiskeys, id]);
    } else {
      // 찜 해제한 경우
      setLikedWhiskeys(likedWhiskeys.filter((whiskeyId) => whiskeyId !== id));
    }
  };
  // 사용자가 찜한 목록 보기
  const handleViewLikedWhiskeys = () => {
    // 찜한 목록을 필터링하여 반환
    return whiskeys.filter((whiskey) => likedWhiskeys.includes(whiskey.id));
  };

   // 별점을 클릭했을 때 실행되는 핸들러
   const handleRate = (value) => {
    // 사용자가 별점을 클릭하면 해당 별점을 상태 변수에 저장
    setUserRating(value);
    
};

  // 리뷰 입력 내용 변경 핸들러
  const handleReviewChange = (event, index) => {
    const newReviews = [...reviews];
    // 해당 인덱스의 리뷰 입력 값을 업데이트하고, 현재 사용자 정보를 추가합니다.
    newReviews[index].reviewInput = event.target.value;
    newReviews[index].user = currentUser;
    setReviews(newReviews);
  };

  // 리뷰 제출 함수
  const handleSubmit = (index) => {
    const newReviews = [...reviews];
    const newReviewContent = newReviews[index].reviewInput.trim(); // 입력한 리뷰 내용 (공백 제거)
    if (newReviewContent !== "") { // 리뷰 내용이 비어있지 않은 경우에만 추가
      const newReview = { content: newReviewContent, user: currentUser };
      
      // 해당 인덱스의 리뷰 배열 맨 앞에 새로운 리뷰 추가
      newReviews[index].reviews.unshift(newReview);
      // 입력 필드 초기화
      newReviews[index].reviewInput = "";
      setReviews(newReviews);
    } else {
      alert("리뷰 내용을 입력해주세요!");
    }
  };

  // 리뷰 삭제 함수
  const handleDelete = (whiskeyIndex, reviewIndex) => {
    const newReviews = [...reviews];
    // 현재 사용자가 작성한 리뷰인 경우에만 삭제 가능
    if (newReviews[whiskeyIndex].reviews[reviewIndex].user && newReviews[whiskeyIndex].reviews[reviewIndex].user.id === currentUser.id) {
      newReviews[whiskeyIndex].reviews.splice(reviewIndex, 1);
      setReviews(newReviews);
    } else {
      alert("해당 리뷰를 삭제할 권한이 없습니다.");
    }
  };

  // 리뷰 수정 함수
  const handleEdit = (whiskeyIndex, reviewIndex) => {
    const newReviews = [...reviews];
    // 현재 사용자가 작성한 리뷰인 경우에만 수정 가능
    if (newReviews[whiskeyIndex].reviews[reviewIndex].user && newReviews[whiskeyIndex].reviews[reviewIndex].user.id === currentUser.id) {
      // 수정할 리뷰 내용을 사용자에게 입력받고, 입력된 값으로 리뷰 내용 업데이트
      const editedReview = prompt("리뷰를 수정하세요:", newReviews[whiskeyIndex].reviews[reviewIndex].content);
      if (editedReview !== null) {
        newReviews[whiskeyIndex].reviews[reviewIndex].content = editedReview;
        setReviews(newReviews);
      }
    } else {
      alert("해당 리뷰를 수정할 권한이 없습니다.");
    }
  };

  // 모든 리뷰 표시 여부를 토글하는 함수
  const toggleShowAllReviews = (index) => {
    const newReviews = [...reviews];
    newReviews[index].showAllReviews = !newReviews[index].showAllReviews;
    setReviews(newReviews);
  };

  // 유저별 리뷰 목록 컴포넌트
  function UserReviews({ reviews }) {
    return (
      <div>
        {/* 사용자가 작성한 리뷰들을 표시합니다. */}
        {reviews.map((review, index) => (
          <div key={index}>
            {review.content}
          </div>
        ))}
      </div>
    );
  }



  return (
    <div>
      <h2>위스키 목록</h2>

      {/* 로그인 상태에 따른 UI */}
      {currentUser ? (
        <div>
          {/* 현재 사용자 정보와 로그아웃 버튼 */}
          현재 사용자: {currentUser.name}
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          {/* 로그인 폼 */}
          로그인이 필요합니다.
          <form onSubmit={(event) => {
            event.preventDefault();
            const username = event.target.elements.username.value;
            const password = event.target.elements.password.value;
            handleLogin(username, password);
          }}>
            <input type="text" name="username" placeholder="사용자 이름" />
            <input type="password" name="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
          </form>
        </div>
      )}

      {/* 검색 입력란 */}
      <input
        type="text"
        placeholder="위스키를 검색하세요"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {/* 위스키 목록 상태를 매핑하여 리스트로 출력 */}
        {reviews
          .filter((whiskey) =>
            whiskey.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((whiskey, whiskeyIndex) => (
            <li key={whiskey.id}>
              <strong>{whiskey.name}</strong>
              <ul>
                <li>가격: {whiskey.price}원</li>
                <li>도수: {whiskey.alcoholContent}</li>
                <li>용량: {whiskey.volume}</li>
                <li>별점: {whiskey.rating}</li>
                <li>주종: {whiskey.type}</li>
                <li>
                  별점:
                  {/* 사용자에게 별점을 입력 받는 부분 */}
                  <div>
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <span
                                    key={index}
                                    onClick={() => handleRate(starValue)}
                                >
                                    {starValue <= userRating ? <FaStar color="gold" /> : <FaRegStar />}
                                </span>
                            );
                        })}
                    </div>
                     {/* 위스키 평균 별점 출력 */}
                     <p>
                        평균 별점: {whiskey.reviews.length > 0 ? whiskey.rating.toFixed(1) : "리뷰 없음"}&nbsp;
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 0.5;
                            return (
                                <span key={index}>
                                    {whiskey.rating > starValue ? <FaStar color="gold" /> : whiskey.rating >= index + 0.25 ? <FaStarHalfAlt color="gold" /> : <FaRegStar />}
                                </span>
                            );
                        })}
                    </p>
                </li>
                <li>
                  {/* 찜하기 버튼 */}
                  <span onClick={() => toggleLike(whiskey.id)}>
                    {whiskey.liked ? <FaHeart color="red" /> : <FaRegHeart />}
                  </span>
                </li>
                {/* 리뷰 입력 필드 */}
                <li>
                  <input
                    type="text"
                    value={whiskey.reviewInput}
                    onChange={(event) => handleReviewChange(event, whiskeyIndex)}
                    placeholder="리뷰를 입력하세요"
                  />
                </li>
                {/* 리뷰 추가 버튼 */}
                <li>
                  <button onClick={() => handleSubmit(whiskeyIndex)}>리뷰 추가</button>
                </li>
                <div>
                  <ul>
                    {/* 상위 3개의 리뷰만 표시 */}
                    {whiskey.reviews.slice(0, whiskey.showAllReviews ? undefined : 3).map((review, reviewIndex) => (
                      <li key={reviewIndex}>
                        {/* 리뷰 내용 및 작성자 */}
                        {review.content} - 작성자: {review.user ? review.user.name : "익명"}

                        {/* 현재 사용자가 작성한 리뷰에만 수정/삭제 버튼 표시 */}
                        {review.user && review.user.id === currentUser?.id && (
                          <>
                            <button onClick={() => handleEdit(whiskeyIndex, reviewIndex)}>수정</button>
                            <button onClick={() => handleDelete(whiskeyIndex, reviewIndex)}>삭제</button>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* 모든 리뷰 표시 여부 토글 버튼 */}
                  <button onClick={() => toggleShowAllReviews(whiskeyIndex)}>
                    {whiskey.showAllReviews ? "간략히 보기" : "더 보기"}
                  </button>
                </div>
              </ul>
            </li>
          ))}
      </ul>

      
      {/* 찜한 목록 보기 */}
      {currentUser && (
        <div>
          <h3>내가 찜한 목록</h3>
          <ul>
            {handleViewLikedWhiskeys().map((whiskey) => (
              <li key={whiskey.id}>{whiskey.name}</li>
            ))}
          </ul>
        </div>
      )}

      <h2>리뷰 목록</h2>
      {/* 현재 사용자의 리뷰 목록 */}
      {currentUser && (
        <>
          {/* 사용자 이름과 리뷰 목록 */}
          <h2>{currentUser.name}의 리뷰 목록</h2>
          <div style={{ maxHeight: "100px", overflowY: "auto" }}>
            <ul>
              {/* 현재 사용자가 작성한 리뷰 표시 */}
              {reviews.map((whiskey, whiskeyIndex) => (
                <li key={whiskeyIndex}>
                  {/* 현재 사용자가 작성한 리뷰만 필터링하여 표시 */}
                  {whiskey.reviews
                    .filter(review => review.user && review.user.id === currentUser.id)
                    .slice(0, 3)
                    .map((review, reviewIndex) => (
                      <div key={reviewIndex}>
                        {/* 리뷰 내용과 작성한 위스키 이름 표시 */}
                        {whiskey.name}:{review.content} - 작성자: {currentUser.name}
                      </div>
                    ))}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default WiskyList1;