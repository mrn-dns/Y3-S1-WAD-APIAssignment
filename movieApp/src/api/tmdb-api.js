export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

// export const getMovieActors = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=2`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

export const getMovieActors = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/actors', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  },
  console.log(window.localStorage.getItem('token'))
  )
  return response.json();
};

// export const getPopularMovieActors = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

export const getPopularMovieActors = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/popularActors', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  },
  console.log(window.localStorage.getItem('token'))
  )
  return response.json();
};

export const getMovieActor = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getMovieActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getMovieActorsDetails = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

// export const getMovies = (args) => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  },
  console.log(window.localStorage.getItem('token'))
  )
  return response.json();
};

export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

// export const getMovie = async (id) => {
//   try {
//     const response = await fetch(
//       `http://localhost:8080/api/movies/${id}`, {
//         headers: {
//           'Authorization': window.localStorage.getItem('token'),
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }

//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };
  
export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/upcoming', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    },
    console.log(window.localStorage.getItem('token'))
    )
    return response.json();
  };

  // export const getUpcomingMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  // export const getTopRatedMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  export const getTopRatedMovies = async () => {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/toprated`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    },
    console.log(window.localStorage.getItem('token'))
    )
    return response.json();
  };

  // export const getPopularMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=5`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  export const getPopularMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/popularMovies', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    },
    console.log(window.localStorage.getItem('token'))
    )
    return response.json();
  };

  // export const getNowPlayingMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=3`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  export const getNowPlayingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/nowplaying', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    },
    console.log(window.localStorage.getItem('token'))
    )
    return response.json();
  };

  export const getSimilarMovies = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieCast = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  // export const getGenres = async () => {
  //   return fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  //       process.env.REACT_APP_TMDB_KEY +
  //       "&language=en-US"
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getGenres = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    },
    console.log(window.localStorage.getItem('token'))
    )
    return response.json();
  };



  export const getActorPortofolio = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error;
    });
  };

