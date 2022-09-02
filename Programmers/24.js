// 해시 테이블로 문제해결
function solution(kind, plays) {
  const kindMap = new Map();

  kind
    .map((kinds, index) => [kinds, plays[index]])
    .forEach(([kinds, plays], index) => {
      const data = kindMap.get(kinds) || { total: 0, songs: [] };
      kindMap.set(kinds, {
        total: data.total + plays,
        songs: [...data.songs, { plays, index }]
          .sort((a, b) => b.plays - a.plays)
          .slice(0, 2),
      });
    });

  return [...kindMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((item) => item.index);
}
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

// 배열로 문제해결
function solution(genres, plays) {
  const answer = [];

  // 장르에 해당하는 play값을 담은 객체
  let songs = genres.map((genre, idx) => {
    return {
      id: idx,
      genre: genre,
      play: plays[idx],
    };
  });

  let playCnt = [];

  // 같은 장르끼리 play 수 누적
  songs.forEach((song) => {
    let thisGenre = playCnt.find((item) => item.genre === song.genre);
    // 복사 x 공유 o
    // 새로운 객체를 만들땐 공유
    if (thisGenre) {
      // console.log(song)
      thisGenre.play += song.play;
    } else {
      playCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });

  songs.sort((a, b) => b.play - a.play);
  playCnt.sort((a, b) => b.play - a.play);

  playCnt.forEach((a) => {
    let len = 0;
    songs.forEach((song) => {
      if (a.genre === song.genre && len < 2) {
        answer.push(song.id);
        len += 1;
      }
    });
  });
  return answer.slice(0, 4);
}
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
