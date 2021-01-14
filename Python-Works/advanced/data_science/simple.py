# Simple chart

from matplotlib import pyplot as pp;

years = [1960, 1970, 1980, 1990, 2000, 2010, 2020];

gdp   = [111.20, 210.10, 268.40, 320.50, 400.70, 475.80, 479.30];

pp.plot(years, gdp, color='green', marker=2, linestyle="solid");

pp.title("GDP chart : INDIA");

pp.ylabel("Crores of $");

pp.show();