import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";

export default function CookiesView() {
    const { setTitle, labels } = useAppContext();

    useEffect(() => {
        setTitle(labels.title_cookies);
    }, [setTitle, labels]);

    return (
        <>
            <Header />
            <main className="page">
                <section>
                    <h1>Политика использования файлов cookie Mizura</h1>
                    <p>Последнее обновление: 21 июля 2025 г.</p>
                </section>

                <section>
                    <h2>1. Что такое файлы cookie?</h2>
                    <p>Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайтов. Они помогают платформе запоминать ваши действия и предпочтения.</p>
                </section>

                <section>
                    <h2>2. Как мы используем cookie</h2>
                    <p>Mizura использует файлы cookie исключительно для:</p>
                    <ul>
                        <li>Обеспечения базовой функциональности платформы</li>
                        <li>Повышения безопасности вашего аккаунта</li>
                        <li>Анализа использования сервиса для улучшения работы</li>
                        <li>Запоминания ваших предпочтений (язык, тема оформления)</li>
                    </ul>
                    <p>Мы <strong>не используем</strong> cookie для:</p>
                    <ul>
                        <li>Сбора данных для рекламы</li>
                        <li>Трекинга между сайтами</li>
                        <li>Создания профилей пользователей в маркетинговых целях</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Типы используемых cookie</h2>

                    <h3>3.1. Обязательные (Essential)</h3>
                    <ul>
                        <li><strong>Назначение:</strong> Обеспечение базовой работы платформы</li>
                        <li><strong>Примеры:</strong> Аутентификация, безопасность сессии</li>
                        <li><strong>Срок хранения:</strong> Сессия или до 30 дней</li>
                    </ul>

                    <h3>3.2. Функциональные (Preferences)</h3>
                    <ul>
                        <li><strong>Назначение:</strong> Запоминание ваших настроек</li>
                        <li><strong>Примеры:</strong> Выбранная тема оформления, языковые предпочтения</li>
                        <li><strong>Срок хранения:</strong> До 1 года</li>
                    </ul>

                    <h3>3.3. Аналитические (Performance)</h3>
                    <ul>
                        <li><strong>Назначение:</strong> Анализ использования платформы</li>
                        <li><strong>Примеры:</strong> Счетчики посещений, отслеживание ошибок</li>
                        <li><strong>Срок хранения:</strong> До 12 месяцев</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Управление cookie</h2>
                    <p>Вы можете контролировать использование файлов cookie:</p>
                    <ul>
                        <li>
                            <strong>Через настройки браузера:</strong> Большинство браузеров позволяют блокировать или удалять cookie.
                            Инструкции для популярных браузеров:
                            <ul>
                                <li><a href="https://support.google.com/chrome/answer/95647">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas">Firefox</a></li>
                                <li><a href="https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Edge</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Через настройки Mizura:</strong> В разделе "Конфиденциальность" вы можете отключить аналитические cookie
                        </li>
                    </ul>
                    <p>Помните: отключение обязательных cookie может сделать платформу неработоспособной.</p>
                </section>

                <section>
                    <h2>5. Сторонние cookie</h2>
                    <p>Mizura использует минимальное количество сторонних сервисов, которые могут устанавливать cookie:</p>
                    <table className="cookie-table">
                        <thead>
                            <tr>
                                <th>Сервис</th>
                                <th>Назначение</th>
                                <th>Тип данных</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Сервис">Сервисы аналитики</td>
                                <td data-label="Назначение">Анализ ошибок и производительности</td>
                                <td data-label="Тип данных">Анонимные данные</td>
                            </tr>
                            <tr>
                                <td data-label="Сервис">CDN-провайдеры</td>
                                <td data-label="Назначение">Ускорение загрузки контента</td>
                                <td data-label="Тип данных">Технические данные</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Мы не используем cookie рекламных сетей или социальных медиа.</p>
                </section>

                <section>
                    <h2>6. Изменения в политике</h2>
                    <p>Мы будем обновлять эту политику при изменении способов использования cookie. Все изменения будут опубликованы на этой странице.</p>
                </section>

                <section>
                    <h2>7. Контакты</h2>
                    <p>По вопросам использования cookie обращайтесь:</p>
                    <p className="contact-email">
                        Эл. почта: <a href="mailto:info@mizura.ru">info@mizura.ru</a>
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}