import styles from './rules.module.css';

export default function RulesScreen() {
    return (
        <div className='flex flex-row-reverse relative justify-between items-center'>
            <div className="flex flex-col gap-20 max-w-[645px]">
               <section className='flex flex-col gap-6'>
                   <h1 className='text-[28px] font-semibold'>Общие положения и правила игры</h1>
                   <h2 className={styles.subtitleRules}>Общие положения</h2>
                   <ol className='flex flex-col gap-4 list-decimal *:ml-4'>
                       <li>
                           Игра предназначена для развлечения и может использоваться пользователями только в личных, некоммерческих целях.
                       </li>
                       <li>
                           Все пользователи должны соблюдать правила, изложенные в данном документе, а также придерживаться принципов честной игры и взаимного уважения.
                       </li>
                       <li>
                           Игра доступна пользователям через приложение (игровой клиент), которое должно быть запущено в облачном мессенджере Telegram.
                       </li>
                       <li>
                           Игровое приложение обеспечивает удобство и стабильность процесса, а также защиту от несанкционированного доступа и мошенничества.
                       </li>
                   </ol>
               </section>
                <section>
                    <h2 className={styles.subtitleRules}>Основные определения</h2>
                    <dl>
                        <dt>Игрок</dt>
                        <dd>
                            Пользователь облачного мессенджера Telegram, использующий игровое приложение PiggyGame.
                        </dd>
                        <dt>Квалифицированный игрок</dt>
                        <dd>
                            Бользователь приложения PiggyGame, собравший на игровом балансе более 1000 свинок и получивший хотя бы один тикет для участия в розыгрыше.
                        </dd>
                        <dt>Игровой баланс</dt>
                        <dd>
                            Баланс пользователя на который зачисляются свинки, пойманные в процессе игры. Каждая пойманная свинка увеличивает баланс на 1 очко.
                        </dd>
                        <dt>Билет</dt>
                        <dd>
                            Билет, дающий право участвовать в розыгрыше копилки. За 1000 собранных свинок система присваивает пользователю один билет.
                        </dd>
                        <dt>Баланс билетов</dt>
                        <dd>
                            Баланс билетов пользователя, дающих ему право участвовать в розыгрыше копилки. Количество билетов пользователя = количеству упоминаний никнейма пользователя в списки участников для розыгрыша, шанс выигрыша пропорционален числу билетов.
                        </dd>
                        <dt>Сумма баланса копилки</dt>
                        <dd>
                            Баланс отображает сумму USDT, храняющуюся на смарт-контракте копилке проекта PiggyHODL. Баланс копилки пополняется администраторами проекта PiggyHODL по мере роста квалифицированных игроков.
                        </dd>
                    </dl>
                </section><section>
                    <h2 className={styles.subtitleRules}>Основные определения</h2>
                    <dl>
                        <dt>Игрок</dt>
                        <dd>
                            Пользователь облачного мессенджера Telegram, использующий игровое приложение PiggyGame.
                        </dd>
                        <dt>Квалифицированный игрок</dt>
                        <dd>
                            Бользователь приложения PiggyGame, собравший на игровом балансе более 1000 свинок и получивший хотя бы один тикет для участия в розыгрыше.
                        </dd>
                        <dt>Игровой баланс</dt>
                        <dd>
                            Баланс пользователя на который зачисляются свинки, пойманные в процессе игры. Каждая пойманная свинка увеличивает баланс на 1 очко.
                        </dd>
                        <dt>Билет</dt>
                        <dd>
                            Билет, дающий право участвовать в розыгрыше копилки. За 1000 собранных свинок система присваивает пользователю один билет.
                        </dd>
                        <dt>Баланс билетов</dt>
                        <dd>
                            Баланс билетов пользователя, дающих ему право участвовать в розыгрыше копилки. Количество билетов пользователя = количеству упоминаний никнейма пользователя в списки участников для розыгрыша, шанс выигрыша пропорционален числу билетов.
                        </dd>
                        <dt>Сумма баланса копилки</dt>
                        <dd>
                            Баланс отображает сумму USDT, храняющуюся на смарт-контракте копилке проекта PiggyHODL. Баланс копилки пополняется администраторами проекта PiggyHODL по мере роста квалифицированных игроков.
                        </dd>
                    </dl>
                </section><section>
                    <h2 className={styles.subtitleRules}>Основные определения</h2>
                    <dl>
                        <dt>Игрок</dt>
                        <dd>
                            Пользователь облачного мессенджера Telegram, использующий игровое приложение PiggyGame.
                        </dd>
                        <dt>Квалифицированный игрок</dt>
                        <dd>
                            Бользователь приложения PiggyGame, собравший на игровом балансе более 1000 свинок и получивший хотя бы один тикет для участия в розыгрыше.
                        </dd>
                        <dt>Игровой баланс</dt>
                        <dd>
                            Баланс пользователя на который зачисляются свинки, пойманные в процессе игры. Каждая пойманная свинка увеличивает баланс на 1 очко.
                        </dd>
                        <dt>Билет</dt>
                        <dd>
                            Билет, дающий право участвовать в розыгрыше копилки. За 1000 собранных свинок система присваивает пользователю один билет.
                        </dd>
                        <dt>Баланс билетов</dt>
                        <dd>
                            Баланс билетов пользователя, дающих ему право участвовать в розыгрыше копилки. Количество билетов пользователя = количеству упоминаний никнейма пользователя в списки участников для розыгрыша, шанс выигрыша пропорционален числу билетов.
                        </dd>
                        <dt>Сумма баланса копилки</dt>
                        <dd>
                            Баланс отображает сумму USDT, храняющуюся на смарт-контракте копилке проекта PiggyHODL. Баланс копилки пополняется администраторами проекта PiggyHODL по мере роста квалифицированных игроков.
                        </dd>
                    </dl>
                </section><section>
                    <h2 className={styles.subtitleRules}>Основные определения</h2>
                    <dl>
                        <dt>Игрок</dt>
                        <dd>
                            Пользователь облачного мессенджера Telegram, использующий игровое приложение PiggyGame.
                        </dd>
                        <dt>Квалифицированный игрок</dt>
                        <dd>
                            Бользователь приложения PiggyGame, собравший на игровом балансе более 1000 свинок и получивший хотя бы один тикет для участия в розыгрыше.
                        </dd>
                        <dt>Игровой баланс</dt>
                        <dd>
                            Баланс пользователя на который зачисляются свинки, пойманные в процессе игры. Каждая пойманная свинка увеличивает баланс на 1 очко.
                        </dd>
                        <dt>Билет</dt>
                        <dd>
                            Билет, дающий право участвовать в розыгрыше копилки. За 1000 собранных свинок система присваивает пользователю один билет.
                        </dd>
                        <dt>Баланс билетов</dt>
                        <dd>
                            Баланс билетов пользователя, дающих ему право участвовать в розыгрыше копилки. Количество билетов пользователя = количеству упоминаний никнейма пользователя в списки участников для розыгрыша, шанс выигрыша пропорционален числу билетов.
                        </dd>
                        <dt>Сумма баланса копилки</dt>
                        <dd>
                            Баланс отображает сумму USDT, храняющуюся на смарт-контракте копилке проекта PiggyHODL. Баланс копилки пополняется администраторами проекта PiggyHODL по мере роста квалифицированных игроков.
                        </dd>
                    </dl>
                </section>
            </div>
            <img src="third-pig.svg" className='fixed top-[45%] left-[7%]' alt=""/>
        </div>
    );
}