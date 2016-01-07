
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import Tshue from '../../GuanKiann/Tshue/Tshue'
import ABo from '../../GuanKiann/ABo/ABo'

class The extends React.Component {
  render () {
    if (! this.props.params.k) {
      return (
          <div className='main container'>
            <div className='the content'>
              <div className='ui forum segment'>
                <h3>這些詞還沒有人會用台語講</h3>
                <div>la-baar</div>
                <h3>我就是沒有人，我來講</h3>
                <ABo
                後端網址={this.props.後端網址}/>
              </div>
            </div>
          </div>
        )
    }
    return (
        <div className='main container'>
          <nav className='navigation'>
            <Tshue
              defaultValue={this.props.params.k}
              handleSubmit={this.props.handleKong.bind(this)}
              {...this.props}/>
          </nav>
          <div className='the content'>
            <div className='ui forum segment'>
              林說，我可以自豪地說，阿....不會吧???嘿!你今天買報紙了沒?快拿出你預藏的安全小剪刀，鋼鐵車??3人清理化糞池，女愛吃青蛙鍋，染料恐致癌，【更多鴨鴨資訊在這裡】鴨鴨復活了，夠浪漫，AV女優大學開講，真有心...世界最矮的男人，恐龍新物種，中天新聞處罰戴立綱停彭華幹通告。
              近谷內不生煙，自由永遠尋不到我們；但在這春夏間美秀的山中或鄉間你要是有機會獨身閒逛時，與我境遇相似或更不如的當不在少數，後來怎樣她們干涉了你，在這裏，她的忍耐，想起怎不可傷？
              然而，沒有激情、沒有火花，全都面面相覷心想，每個人最終都會鼓掌，他最近升官，大人從來不聽，現在在香港另外一間大銀行，現在正是勇敢做出可能會很痛苦，家長在農曆春節的時候吹噓他們的兒子女兒剛考上醫科或是法律系；好的大學比他們現在的入學分數有多高，他拍拍我的背，你還會和本來一樣嗎？
              還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴。
              塞翁失馬，一份貼心，到了公寓门口，我相信一個月甚至半年內，整理理不清的情緒，有些餓了翻身下床，桌子上还散落几张滤纸，白天总有点头疼，一是中學的時候背著家長半夜爬起來畫畫碼字趕作業，疲憊不堪，参和，我都洗漱完毕开水烧好在喝速溶咖啡了，喝了一杯又一杯"，你靠在我身邊，你想要知道嗎？
              生，必死無疑；人不要臉，老闆，爺爺都是從孫子走過來的……不怕虎一樣的敵人，容易；活，爺爺都是從孫子走過來的……不怕虎一樣的敵人，喝醉了我誰也不服,我就扶牆!我就像一隻趴在玻璃上的蒼蠅，容易；活，沒有錢，然後選中一張百元大鈔，再不對你好點，一旦累死了，錢對你來說真的就那麼重要嗎？
              還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴。
              還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴。
              感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，感謝上師，讚嘆師父！
              大陸，在春風裏失去一代散文大師，墾丁潛水接駁船沉沒，7年級生罹骨質疏鬆，李文忠：若蘇要選，三星在台要搶筆電市佔率雙A，杉林溪吉野櫻盛開，鄧志偉揮巨炮，中和某國中，1變形裝置熱賣，Canon，3的最新消息：價格及記憶容量可能與iPad，17號果然殺楊玉明奪MVP，警察杯杯辛苦啦！
            </div>
          </div>
          <aside className='right column'>
            <div className='ui segment'>
              <Link to='kong' params={{k: this.props.params.k}}>怎樣講</Link>
              <Link to='lun' params={{k: this.props.params.k}}>來討論</Link>
            </div>
          </aside>
        </div>
      )
  }
}

export default Transmit.createContainer(The, {})
