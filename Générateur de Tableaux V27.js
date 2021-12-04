Viewport(0, 0, 1920, 1080, -1);
T = [];
z = "";
m = 0;
msave = 0;
ysave = 0;
Tsave = [];
y = "";
gauche = 0;
droite = 0;
haut = 0;
bas = 0;
gh = 0;
gb = 0;
dh = 0;
db = 0;
msave_tab = [];
var i1 = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/G%20milieu.png');
var i2 = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/GM%20Haut.png');
var i3 = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/GM%20Bas.png");
var i4 = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/GM%20cot%C3%A9%20gauche.png');
var i5 = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/GM%20cot%C3%A9%20droit.png');
var i6 = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/GM%20angle%20gauche.png');
var i7 = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/GM%20angle%20droit.png');
var i8 = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/GM%20angle%20gauche%20bas.png");
var i9 = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/GM%20angle%20droit%20bas.png");

var i14=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/gauche%20%2B%20droite.png");
var i15=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/haut%2Bbas.png");
var i16=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/haut%2Bgauche%2Bdroit.png");
var i17=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/bas%2Bgauche%2Bdroit.png");
var i18=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/gauche%2Bhaut%2B%2Bbas.png");
var i19=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/droite%2Bhaut%2Bbas.png");
var i20=PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/GM%201.png");


var i1b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20milieu.png");
var i2b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20haut.png");
var i3b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20milieu%20bas.png");
var i4b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20cot%C3%A9%20gauche.png");
var i5b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20cot%C3%A9%20droit.png");
var i6b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20angle%20gauche.png");
var i7b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20angle%20droit.png");
var i8b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20angle%20gauche%20bas.png");
var i9b = PreloadImage("https://github.com/argeria/AlgoScript-Project/raw/main/BGG%20angle%20droit%20bas.png");
var animetest = PreloadImage('https://github.com/argeria/AlgoScript-Project/raw/main/Test4.png');
var police = PreloadGooglefont("'Righteous',cursive");
turtleEnabled = false;
ysave = "";
type = 1;

function Keypressed(a) {
  if (a == 37) {
    xdif = xdif + 60;
  }
  if (a == 39) {
    xdif = xdif - 60;
  }
  if (a == 38) {
    ydif = ydif + 60;
  }
  if (a == 40) {
    ydif = ydif - 60;
  }
  if (a == Caractere_vers_Ascii('R')) {
    y = "";
    T = [];
    m = 0;
    EffacerEcran();
  }
  if (a == Caractere_vers_Ascii('U')) {
    type = type + 1;
    if (type > 2) {
      type = 1;
    }
  }
  if (a == Caractere_vers_Ascii('S')) {
    EffacerEcran();
    if (Taille(msave_tab) > 0) {
      Ttest = SousTableau(T, 0, msave_tab[Taille(msave_tab) - 1 - msave]);
      m = msave_tab[Taille(msave_tab) - 1 - msave];
      T = Ttest;
      rafinage();
      afficher_tab();
    } else {
      T = "";
    }

    msave = msave + 1;
  }
  if (a == Caractere_vers_Ascii('N')) {
    msave_tab[Taille(msave_tab)] = m;
    y = "";
    msave = 0;
    xmin = SaisieEntier("xmin ?");
    ymin = SaisieEntier("ymin ?");
    xmax = SaisieEntier("largeur ?");
    ymax = SaisieEntier("hauteur ?");

    for (i = ymin; i <= (ymax + ymin - 1); i = i + 1) {
      for (j = xmin; j <= (xmax + xmin - 1); j = j + 1) {
        T[m] = [1, 1, 0];
        T[m][0] = j;
        T[m][1] = i;
        T[m][3] = type;
        m = m + 1;
      }
    }
    y = y + z;
    rafinage();
    afficher_tab();
  }
}

function afficher_tab() {
  y = "";
  for (i = 0; i <= Taille(T) - 2; i = i + 1) {
    y = y + "[" + T[i][0] + "," + T[i][1] + "," + T[i][2] + "," + T[i][3] + "],";
  }
  y = "[" + y + "[" + T[Taille(T) - 1][0] + "," + T[Taille(T) - 1][1] + "," + T[Taille(T) - 1][2] + "," + T[Taille(T) - 1][3] + "]]";

  EffacerEcran();
  Ecrire(y);
}

var xdif = 0;
var ydif = 0;
click = 0;
xs = 0;
ys = 0;

function rafinage() {

  for (i = 0; i <= (Taille(T) - 1); i = i + 1) {
    for (j = 0; j <= (Taille(T) - 1); j = j + 1) {
      if ((T[j][0] == T[i][0] - 1) && (T[j][1] == T[i][1])) {
        gauche = 1;
      }
      if ((T[j][0] == T[i][0] + 1) && (T[j][1] == T[i][1])) {
        droite = 1;
      }
      if ((T[j][1] == T[i][1] - 1) && (T[j][0] == T[i][0])) {
        bas = 1;
      }
      if ((T[j][1] == T[i][1] + 1) && (T[j][0] == T[i][0])) {
        haut = 1;
      }
      if ((T[j][0] == T[i][0] - 1) && (T[j][1] == T[i][1] - 1)) {
        gb = 1;
      }
      if ((T[j][0] == T[i][0] - 1) && (T[j][1] == T[i][1] + 1)) {
        gh = 1;
      }
      if ((T[j][0] == T[i][0] + 1) && (T[j][1] == T[i][1] - 1)) {
        db = 1;
      }
      if ((T[j][0] == T[i][0] + 1) && (T[j][1] == T[i][1] + 1)) {
        dh = 1;
      }

    }
    if (gauche == 1) {
      if (droite == 1) {
        if (haut == 1) {
          if (bas == 1) {
            T[i][2] = 1;
          } else {
            T[i][2] = 3;
          }
        } else {
          if (bas == 1) {
            T[i][2] = 2;
          } else {
            T[i][2] = 15;
          }
        }
      } else {
        if (haut == 1) {
          if (bas == 1) {
            T[i][2] = 5;
          } else {
            T[i][2] = 9;
          }
        } else {
          if (bas == 1) {
            T[i][2] = 7;
          } else {
            T[i][2] = 19;
          }
        }
      }
    } else {
      if (droite == 1) {
        if (haut == 1) {
          if (bas == 1) {
            T[i][2] = 4;
          } else {
            T[i][2] = 8;
          }
        } else {
          if (bas == 1) {
            T[i][2] = 6;
          } else {
            T[i][2] = 18;
          }
        }
      } else {
        if (haut == 1) {
          if (bas == 1) {
            T[i][2] = 14;
          } else {
            T[i][2] = 17;
          }
        } else {
          if (bas == 1) {
            T[i][2] = 16;
          } else {
            T[i][2] = 20;
          }
        }
      }
    }
    if (T[i][2] == 0) {

      if (gb == 1) {
        T[i][2] = 12;
      }
      if (gh == 1) {
        T[i][2] = 10;
      }
      if (db == 1) {
        T[i][2] = 13;
      }
      if (dh == 1) {
        T[i][2] = 11;
      }
    }
    gauche = 0;
    droite = 0;
    haut = 0;
    bas = 0;
    gh = 0;
    gb = 0;
    dh = 0;
    db = 0;
  }
}

function draw() {
  Initialiser();
  Viewport(0, 0, 1920, 1080, -1);
  for (i = 0; i <= (Taille(T) - 1); i = i + 1) {
    if (((T[i][0] * 60 - 60 + xdif) >= 0) && ((T[i][1] * 60 - ydif) <= 1080)) {
      if (T[i][2] == 1) {
        if (T[i][3] == 1) {
          DrawImageObject(i1, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
        }
        if (T[i][3] == 2) {
          DrawImageObject(i1b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
        }
      } else {
        if (T[i][2] == 2) {
          if (T[i][3] == 1) {
            DrawImageObject(i2, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
          }
          if (T[i][3] == 2) {
            DrawImageObject(i2b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
          }

        } else {
          if (T[i][2] == 3) {
            if (T[i][3] == 1) {
              DrawImageObject(i3, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
            }
            if (T[i][3] == 2) {
              DrawImageObject(i3b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
            }
          } else {
            if (T[i][2] == 4) {
              if (T[i][3] == 1) {
                DrawImageObject(i4, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
              }
              if (T[i][3] == 2) {
                DrawImageObject(i4b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
              }
            } else {
              if (T[i][2] == 5) {
                if (T[i][3] == 1) {
                  DrawImageObject(i5, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                }
                if (T[i][3] == 2) {
                  DrawImageObject(i5b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                }
              } else {
                if (T[i][2] == 6) {
                  if (T[i][3] == 1) {
                    DrawImageObject(i6, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                  }
                  if (T[i][3] == 2) {
                    DrawImageObject(i6b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                  }
                } else {
                  if (T[i][2] == 7) {
                    if (T[i][3] == 1) {
                      DrawImageObject(i7, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                    }
                    if (T[i][3] == 2) {
                      DrawImageObject(i7b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                    }
                  } else {
                    if (T[i][2] == 8) {
                      if (T[i][3] == 1) {
                        DrawImageObject(i8, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                      }
                      if (T[i][3] == 2) {
                        DrawImageObject(i8b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                      }
                    } else {
                      if (T[i][2] == 9) {
                        if (T[i][3] == 1) {
                          DrawImageObject(i9, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                        }
                        if (T[i][3] == 2) {
                          DrawImageObject(i9b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                        }
                      } else {
                        if (T[i][2] == 14) {
                          if (T[i][3] == 1) {
                            DrawImageObject(i14, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                          }
                          if (T[i][3] == 2) {
                            DrawImageObject(i1b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                          }
                        } else {
                          if (T[i][2] == 15) {
                            if (T[i][3] == 1) {
                              DrawImageObject(i15, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                            }
                            if (T[i][3] == 2) {
                              DrawImageObject(i2b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                            }
                          } else {
                            if (T[i][2] == 16) {
                              if (T[i][3] == 1) {
                                DrawImageObject(i16, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                              }
                              if (T[i][3] == 2) {
                                DrawImageObject(i2b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                              }
                            } else {
                              if (T[i][2] == 17) {
                                if (T[i][3] == 1) {
                                  DrawImageObject(i17, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                }
                                if (T[i][3] == 2) {
                                  DrawImageObject(i1b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                }
                              } else {
                                if (T[i][2] == 18) {
                                  if (T[i][3] == 1) {
                                    DrawImageObject(i18, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                  }
                                  if (T[i][3] == 2) {
                                    DrawImageObject(i2b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                  }
                                } else {
                                  if (T[i][2] == 19) {
                                    if (T[i][3] == 1) {
                                      DrawImageObject(i19, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                    }
                                    if (T[i][3] == 2) {
                                      DrawImageObject(i2b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                    }
                                  } else {
                                    if (T[i][2] == 20) {
                                      if (T[i][3] == 1) {
                                      DrawImageObject(i20, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                    }
                                    if (T[i][3] == 2) {
                                      DrawImageObject(i2b, (T[i][0] * 60 - 60 + xdif), (T[i][1] * 60 - ydif), 60, 1020);
                                    }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      if (click == 1) {
        if ((xs > (T[i][0] * 60 - 60 + xdif)) && (xs < (T[i][0] * 60 + xdif)) && (ys < (T[i][1] * 60 - ydif)) && (ys > (-T[i][1] * 60 + 60 - ydif))) {
          click = 0;
          Ecrire(T[i]);
        }
      }

    }
  }
  click = 0;
  setCanvasFont(police, '20px', '');
  for (i = 0; i < 32; i = i + 1) {
    if ((i + 1 + (-xdif) / 60) > 0) {
      Texte((i * 60 + 20), 20, ((i + 1 + (-xdif) / 60)), rgb(100, 100, 100));
    }
  }
  for (i = 1; i < 18; i = i + 1) {
    if ((i + 1 + (ydif) / 60) > 0) {
      Texte(10, (i * 60 + 10), ((i + 1 + (ydif) / 60)), rgb(100, 100, 100));
    }
  }
  setCanvasFont(police, '15px', '');
  Texte(100, 1040, "N pour créer une platforme, S pour faire retour arrière, R pour tout réinitialiser et U pour changer de type de platforme", rgb(100, 100, 100));
  Texte(100, 1000, "Type de platforme : " + type, rgb(100, 100, 100));
}
FrameRate = 60;
Loop(-1);

function MouseClick(x, y) {
  xs = x;
  ys = y;
  click = 1;
}