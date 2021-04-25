Aplikacja pozwala stworzyć własną bibliotekę książek. Została zaprojektowana z wykorzystaniem HTML, CSS oraz JavaScript.
Znajduje się w niej formularz, który przyjmuje następujące dane:
a) Tytuł książki (co najmniej 1 znak)
b) Autor książki (co najmniej 3 znaki)
c) Priorytet przeczytania (liczby od 1 do 5)
d) Listę z kategoriami (3 kategorie do wyboru)
e) Przycisk umożliwiający wysyłanie
Po wysłaniu formularza strona nie przeładowuje się oraz jednocześnie wyświetl nowo dodaną
książkę w tabeli i czyści formularz.

Funkcjonalność:
- Walidacja dla pól formularza. W przypadku kiedy jakieś pole nie przechodzi walidacji, książka
nie może zostać dodana.
- Użytkownik ma możliwość dodania kolejnej książki do tabeli.
- Cała tabela zapisuje się w localstorage (przy ponownym otworzeniu przeglądarki zostaje
załadowana ponownie i wyświetlona z takim samym stanem jak była przy zamknięciu).

live https://tender-cray-ed6c93.netlify.app
